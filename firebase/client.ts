// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp,  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApf-DN8GwL6uUA-nkFQ6F0FUvfKQX6V-Y",
  authDomain: "myprep-deb28.firebaseapp.com",
  projectId: "myprep-deb28",
  storageBucket: "myprep-deb28.firebasestorage.app",
  messagingSenderId: "696934337943",
  appId: "1:696934337943:web:40f10a1bf37751ff6848d2",
  measurementId: "G-80ZN5LWZH7"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);


