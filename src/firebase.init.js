// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDJvsu_D7R2lf4kPANngFWYWMpFCA5PnaY",
  authDomain: "genius-car-service-d0b2e.firebaseapp.com",
  projectId: "genius-car-service-d0b2e",
  storageBucket: "genius-car-service-d0b2e.appspot.com",
  messagingSenderId: "111384547985",
  appId: "1:111384547985:web:000dc524d2389d2d97a530"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
