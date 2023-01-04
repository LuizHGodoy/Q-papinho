import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtrCZLSGoknLAAITWT_5Lo_WITEwr4hQQ",
  authDomain: "chat-app-6606f.firebaseapp.com",
  projectId: "chat-app-6606f",
  storageBucket: "chat-app-6606f.appspot.com",
  messagingSenderId: "1023090983348",
  appId: "1:1023090983348:web:127416a2bbd01294c072e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
