import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Timestamp } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAntNpkO42eaPAP1Mr0qKFzy2c6_H8Cw_U",
  authDomain: "bharat-gifting-20870.firebaseapp.com",
  projectId: "bharat-gifting-20870",
  storageBucket: "bharat-gifting-20870.appspot.com",
  messagingSenderId: "877897926233",
  appId: "1:877897926233:web:0a02080b27a241c673d348",
  measurementId: "G-WR1KJDLPFJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
export {Timestamp };

