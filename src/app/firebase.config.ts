// src/app/firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhWZIDarHF3zHLD50vp3wCax450VwBTrw",
  authDomain: "fordreviewtest.firebaseapp.com",
  projectId: "fordreviewtest",
  storageBucket: "fordreviewtest.appspot.com", 
  messagingSenderId: "855820087168",
  appId: "1:855820087168:web:d65799fbe3f697ba22db65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
