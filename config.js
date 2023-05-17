import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCCTBS9j7tKXfvumFy1TnZq7N24PM-T6Ms",
  authDomain: "fir-auth-47f5a.firebaseapp.com",
  projectId: "fir-auth-47f5a",
  storageBucket: "fir-auth-47f5a.appspot.com",
  messagingSenderId: "139336210362",
  appId: "1:139336210362:web:729f969b6347c73a836f83"
};
let db;
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
if (!firebase.apps.length) {
  const db=getFirestore(firebase.initializeApp(firebaseConfig));
}
export{db,getFirestore,collection, addDoc,firebase}