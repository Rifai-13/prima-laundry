// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXRWa23ypN0zhvnMuJ6JbOXjvTYn8pELo",
  authDomain: "laundry-44a7f.firebaseapp.com",
  projectId: "laundry-44a7f",
  storageBucket: "laundry-44a7f.firebasestorage.app",
  messagingSenderId: "440214144881",
  appId: "1:440214144881:web:8e06efb3a55d24f0a918d0",
  measurementId: "G-GHMM95RV9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
