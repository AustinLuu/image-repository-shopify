import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

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