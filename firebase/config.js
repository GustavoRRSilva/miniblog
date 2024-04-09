import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
const firebaseConfig = {
  apiKey: "AIzaSyBbvjGX-_UiPJEnANS3hOUMS6Idar0np-Y",
  authDomain: "miniblog-5148c.firebaseapp.com",
  projectId: "miniblog-5148c",
  storageBucket: "miniblog-5148c.appspot.com",
  messagingSenderId: "466859143830",
  appId: "1:466859143830:web:209d98e8d78a34dd5388b7"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}
export {app};