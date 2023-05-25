// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAJ1NAKYWdITQd9uEuY6uAu8lP_uglXklY",
  authDomain: "clone-1a8ba.firebaseapp.com",
  projectId: "clone-1a8ba",
  storageBucket: "clone-1a8ba.appspot.com",
  messagingSenderId: "645497833386",
  appId: "1:645497833386:web:e2570f5883d934210bcdd3",
  measurementId: "G-373M36NE27"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{app,db,auth}