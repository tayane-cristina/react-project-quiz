
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDA_Mily8lMJUGo-v4A3KnzYHqIPRuRhQo",
  authDomain: "quizz-62d22.firebaseapp.com",
  projectId: "quizz-62d22",
  storageBucket: "quizz-62d22.appspot.com",
  messagingSenderId: "1030941579295",
  appId: "1:1030941579295:web:8c6ea65dfbc962587e1d2a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

