// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRUrBkS-UtpLq3xS-EiTcSVTkIEK3e11A",
  authDomain: "cursor-react.firebaseapp.com",
  projectId: "cursor-react",
  storageBucket: "cursor-react.firebasestorage.app",
  messagingSenderId: "945372882354",
  appId: "1:945372882354:web:82bdd442955d0b590c30ab",
  measurementId: "G-2VVZ2Q9JYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);