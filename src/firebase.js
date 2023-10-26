// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVISt_swOmfWkoDENDK398PsT_n1frxvY",
  authDomain: "chow-farm.firebaseapp.com",
  projectId: "chow-farm",
  storageBucket: "chow-farm.appspot.com",
  messagingSenderId: "836118650287",
  appId: "1:836118650287:web:da7c036442f4e65061a35a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
