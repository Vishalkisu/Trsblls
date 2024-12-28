import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export const loginWithEmailAndPassword = async (email: string, password: string): Promise<User> => {
    try {
        // Input validation
        if (!email?.trim() || !password?.trim()) {
            throw new Error('Please enter both email and password');
        }

        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        try {
            // Update last login timestamp
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                lastLogin: new Date().toISOString()
            }, { merge: true });
        } catch (err) {
            // Non-critical error, just log it
            console.warn('Failed to update last login time:', err);
        }

        return userCredential.user;
    } catch (error: any) {
        console.error('Login error:', error);
        switch (error.code) {
            case 'auth/user-not-found':
                throw new Error('Account not found');
            case 'auth/wrong-password':
                throw new Error('Incorrect password');
            case 'auth/invalid-email':
                throw new Error('Invalid email format');
            case 'auth/user-disabled':
                throw new Error('This account has been disabled');
            case 'auth/too-many-requests':
                throw new Error('Too many failed attempts. Please try again later');
            case 'auth/network-request-failed':
                throw new Error('Network error. Please check your internet connection and try again.');
            default:
                throw new Error(error.message || 'Login failed');
        }
    }
};

export const registerUser = async (email: string, password: string, username: string): Promise<User> => {
    try {
        // Input validation
        if (!email?.trim() || !password?.trim() || !username?.trim()) {
            throw new Error('Please fill in all fields');
        }

        // Username validation
        if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
            throw new Error('Username must be 3-20 characters and can only contain letters, numbers, and underscores');
        }

        // Password validation
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile with username - IMPORTANT: This sets the displayName
        await updateProfile(user, {
            displayName: username // This will be shown in _username_1m9xa_719
        });

        try {
            // Create user document with username
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                email: email.toLowerCase(),
                walletBalance: 0,
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            });
        } catch (err) {
            console.warn('Failed to create user document:', err);
        }

        return user;
    } catch (error: any) {
        console.error('Registration error:', error);
        switch (error.code) {
            case 'auth/email-already-in-use':
                throw new Error('Email is already registered');
            case 'auth/invalid-email':
                throw new Error('Invalid email format');
            case 'auth/operation-not-allowed':
                throw new Error('Registration is currently disabled');
            case 'auth/weak-password':
                throw new Error('Password is too weak');
            case 'auth/network-request-failed':
                throw new Error('Network error. Please check your internet connection and try again.');
            default:
                throw new Error(error.message || 'Registration failed');
        }
    }
};

export const signOutUser = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error: any) {
        console.error('Logout error:', error);
        if (error.code === 'auth/network-request-failed') {
            throw new Error('Network error during logout. Please check your connection.');
        }
        throw new Error('Logout failed. Please try again.');
    }
};

export { auth };
