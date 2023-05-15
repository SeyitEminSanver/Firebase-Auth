import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCTBS9j7tKXfvumFy1TnZq7N24PM-T6Ms",
  authDomain: "fir-auth-47f5a.firebaseapp.com",
  projectId: "fir-auth-47f5a",
  storageBucket: "fir-auth-47f5a.appspot.com",
  messagingSenderId: "139336210362",
  appId: "1:139336210362:web:729f969b6347c73a836f83"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};