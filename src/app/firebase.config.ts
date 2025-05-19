// src/app/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPxmcKIBbe8HRuS9XWY9debT7w5y8MXz0",
  authDomain: "fordreviews-cde42.firebaseapp.com",
  projectId: "fordreviews-cde42",
  storageBucket: "fordreviews-cde42.appspot.com",
  messagingSenderId: "368159832465",
  appId: "1:368159832465:web:664474f6c33accec460230",
  measurementId: "G-WMV84K8BY4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
