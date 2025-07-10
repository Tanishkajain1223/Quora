import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAND6EGSN2isDuX838DuD1T-9gzQJdTej4",
  authDomain: "quora-c3d18.firebaseapp.com",
  projectId: "quora-c3d18",
  storageBucket: "quora-c3d18.firebasestorage.app",
  messagingSenderId: "1052306764328",
  appId: "1:1052306764328:web:461b4f304fb31c20fefb1d",
  measurementId: "G-5B821HNTJM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
