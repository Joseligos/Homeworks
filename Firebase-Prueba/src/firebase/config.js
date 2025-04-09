// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnumUkS3gzOIqtATy7c-U3IDsUgMZHvXo",
  authDomain: "react-juan.firebaseapp.com",
  projectId: "react-juan",
  storageBucket: "react-juan.firebasestorage.app",
  messagingSenderId: "1067097718456",
  appId: "1:1067097718456:web:acb68ec1931b3a96e63e4d",
  measurementId: "G-BP9G56PKZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {app, auth, provider}