import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Timestamp } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA8gh17RYwonBYjzMIMeOoGmbNiskFrzMM",
  authDomain: "myapp-9e3d4.firebaseapp.com",
  projectId: "myapp-9e3d4",
  storageBucket: "myapp-9e3d4.appspot.com",
  messagingSenderId: "896804156435",
  appId: "1:896804156435:web:ea9509cc7b2dbcd466fbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
export {Timestamp };

