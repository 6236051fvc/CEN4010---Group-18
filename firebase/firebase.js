// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkqAYXUcuxViea2YKSN_E7TmrKXu3YvjQ",
  authDomain: "ai-flashcards-572f8.firebaseapp.com",
  projectId: "ai-flashcards-572f8",
  storageBucket: "ai-flashcards-572f8.appspot.com",
  messagingSenderId: "201355241892",
  appId: "1:201355241892:web:a1ce3192608e6a5e58b931",
  measurementId: "G-QF6HN6883P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, app, auth }