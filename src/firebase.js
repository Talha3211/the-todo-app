// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4a6O879XXQxqZ1HzBx7j38PmTA88_DM",
  authDomain: "todo-b9eae.firebaseapp.com",
  projectId: "todo-b9eae",
  storageBucket: "todo-b9eae.appspot.com",
  messagingSenderId: "438246449020",
  appId: "1:438246449020:web:e30f9b48f4ee60ca628ef9",
  measurementId: "G-X0Y1Y1K407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);  // Initialize Firebase Auth

const analytics = getAnalytics(app);

// 5gTGReB2mD4fj7UzSmAL