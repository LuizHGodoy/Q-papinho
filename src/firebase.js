import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzTqoqqRWYxihbdUYnpF0aZAjkFrZ-BQw",
  authDomain: "q-papinho.firebaseapp.com",
  projectId: "q-papinho",
  storageBucket: "q-papinho.appspot.com",
  messagingSenderId: "356874492631",
  appId: "1:356874492631:web:aafd3b4c1b647f1a19ee92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore;
