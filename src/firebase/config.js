// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrwUIrW2r8nDul4IjuM5k7ZVZOzu2sdFc",
  authDomain: "image-repository-shopify.firebaseapp.com",
  projectId: "image-repository-shopify",
  storageBucket: "image-repository-shopify.appspot.com",
  messagingSenderId: "1030646849181",
  appId: "1:1030646849181:web:ba6ea4ad0e090420713e74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};