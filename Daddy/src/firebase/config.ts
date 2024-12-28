import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjSbAJQYoybkZjbxj2apoKq8-R542wfyY",
  authDomain: "game-68d88.firebaseapp.com",
  projectId: "game-68d88",
  storageBucket: "game-68d88.firebasestorage.app",
  messagingSenderId: "1076424293462",
  appId: "1:1076424293462:web:2d1996566725877e5ecff7",
  measurementId: "G-NMV728N9WT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Enable phone authentication
auth.settings.appVerificationDisabledForTesting = false; // Set to true only in development
