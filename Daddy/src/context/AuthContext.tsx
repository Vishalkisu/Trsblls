import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, loginWithEmailAndPassword, registerUser, signOutUser } from '../firebase/auth';
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface AuthContextType {
  currentUser: User | null;
  isDemo: boolean;
  userBalance: number;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  loginAsDemo: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isDemo, setIsDemo] = useState(false);
  const [userBalance, setUserBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load user data from Firestore
  const loadUserData = async (user: User) => {
    if (!user) return;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserBalance(userData.walletBalance || 0);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user && !isDemo) {
        await loadUserData(user);
      } else {
        setUserBalance(0);
        setIsDemo(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await loginWithEmailAndPassword(email, password);
      setIsDemo(false);
      await loadUserData(user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string, username: string) => {
    try {
      const user = await registerUser(email, password, username);
      setIsDemo(false);
      await loadUserData(user);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOutUser(); // This will handle both regular and demo logout
      setCurrentUser(null);
      setIsDemo(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const loginAsDemo = async () => {
    try {
      setIsDemo(true);
      // Create a demo user object
      const demoUser = {
        uid: 'demo-user',
        email: 'demo@daddybet.com',
        displayName: 'Demo User',
      } as User;
      setCurrentUser(demoUser);
      setUserBalance(1000); // Give demo users some initial balance
    } catch (error) {
      console.error('Demo login error:', error);
      throw error;
    }
  };

  const value = {
    currentUser,
    isDemo,
    userBalance,
    login,
    register,
    logout,
    loginAsDemo,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
