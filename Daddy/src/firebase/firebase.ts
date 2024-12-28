import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAPzYQN5-RT-MSPXV3ExoBIPPpCzDiAssc",
  authDomain: "daddy-bet.firebaseapp.com",
  projectId: "daddy-bet",
  storageBucket: "daddy-bet.appspot.com",
  messagingSenderId: "732433948865",
  appId: "1:732433948865:web:eb4d19397d61869fedb440",
  measurementId: "G-L0342ESVRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Enable offline persistence with better error handling
enableIndexedDbPersistence(db, {
  synchronizeTabs: true
}).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Multiple tabs open, persistence disabled');
  } else if (err.code === 'unimplemented') {
    // The current browser doesn't support persistence
    console.warn('Current browser doesn\'t support persistence');
  } else {
    console.error('Persistence error:', err);
  }
});

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  try {
    // Check if emulators are running
    fetch('http://127.0.0.1:9099')
      .then(() => {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
      })
      .catch(() => {
        console.log('Emulators not running, using production environment');
      });
  } catch (error) {
    console.log('Error connecting to emulators:', error);
  }
}

export { analytics };
export default app;
