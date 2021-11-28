import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQggQlfM0hHIAWW02f4OSu7YDmYvIyEHM ",
  authDomain: 'videocall-f7a09.firebaseapp.com',
  projectId: 'videocall-f7a09',
  storageBucket: 'videocall-f7a09.appspot.com',
  messagingSenderId: '345378338506',
  appId: '1:345378338506:web:6ca7158689a9ef541be633'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);