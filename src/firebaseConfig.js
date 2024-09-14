// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD_vfpHdCjPWrgNRrN4njJ28JJSBzGi-zE",
  authDomain: "admin-auth-e5f3b.firebaseapp.com",
  projectId: "admin-auth-e5f3b",
  storageBucket: "admin-auth-e5f3b.appspot.com",
  messagingSenderId: "842114535896",
  appId: "1:842114535896:web:4566ce4357a36047b922ad",
  measurementId: "G-GM08YLS4HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export Firebase services
export { auth, firestore, collection, getDocs, addDoc };
