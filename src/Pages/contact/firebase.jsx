// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD_vjUprlYOqn963L4i0iDWFzqwJXPdwQQ",
  authDomain: "portfolio-avj.firebaseapp.com",
  projectId: "portfolio-avj",
  storageBucket: "portfolio-avj.appspot.com",
  messagingSenderId: "458601074763",
  appId: "1:458601074763:web:37fbd2161339eb4e14fdce",
  measurementId: "G-VBFNVWJYVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, getDocs };
