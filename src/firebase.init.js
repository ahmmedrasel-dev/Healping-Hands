// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo8U7nQ46ufcI8tNxtIyvUxXsdEjQ0Rfs",
  authDomain: "helping-hands-5b467.firebaseapp.com",
  projectId: "helping-hands-5b467",
  storageBucket: "helping-hands-5b467.appspot.com",
  messagingSenderId: "547006043477",
  appId: "1:547006043477:web:bfe737d920147fa0134bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;