
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmbVp1Zxs5R3iBG34sr9TFl4DEMvTpIiM",
  authDomain: "e-commerce-app-40324.firebaseapp.com",
  projectId: "e-commerce-app-40324",
  storageBucket: "e-commerce-app-40324.appspot.com",
  messagingSenderId: "503873784933",
  appId: "1:503873784933:web:99d44ac8682cdbd927ca8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;