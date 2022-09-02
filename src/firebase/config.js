// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfx1PCGyzxWhZq7FcYhMnf6QuvfsC8ixE",
  authDomain: "pt-academiageek.firebaseapp.com",
  projectId: "pt-academiageek",
  storageBucket: "pt-academiageek.appspot.com",
  messagingSenderId: "1051075336398",
  appId: "1:1051075336398:web:2a058e5f4819190dd8989f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );