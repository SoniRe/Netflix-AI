// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxFCSWPaMnFGeZmvoXWXFUTyr7egKH3zo",
  authDomain: "netflix-gpt-30497.firebaseapp.com",
  projectId: "netflix-gpt-30497",
  storageBucket: "netflix-gpt-30497.appspot.com",
  messagingSenderId: "689888787112",
  appId: "1:689888787112:web:8284a41bc38522cf14e09d",
  measurementId: "G-8SYXP0RE64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
