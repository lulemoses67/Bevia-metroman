// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw0FM2xIg58cpnU2tLmaWhBi0mW7tgEH8",
  authDomain: "brevia-metroman.firebaseapp.com",
  projectId: "brevia-metroman",
  storageBucket: "brevia-metroman.firebasestorage.app",
  messagingSenderId: "443666953663",
  appId: "1:443666953663:web:7b7e1778dae052f6175d0a",
  measurementId: "G-WC953981RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export the db for use in your hooks and components
export { db };