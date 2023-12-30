// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5868a.firebaseapp.com",
  projectId: "mern-estate-5868a",
  storageBucket: "mern-estate-5868a.appspot.com",
  messagingSenderId: "495877483452",
  appId: "1:495877483452:web:5f02001bdaf88ee0b6d9b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);