// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe7cjeVmDYTcgKPG9hwfaquUIzadtusWQ",
  authDomain: "the-chow-farm.firebaseapp.com",
  projectId: "the-chow-farm",
  storageBucket: "the-chow-farm.appspot.com",
  messagingSenderId: "709599613998",
  appId: "1:709599613998:web:8b97da71711d07fc45bbbf",
  measurementId: "G-K202Z8JM5Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
