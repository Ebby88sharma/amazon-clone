import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBajmqZfaabVqg5gAlFbqSlKG_OPZjpOjQ",
  authDomain: "fir-cbd3b.firebaseapp.com",
  projectId: "fir-cbd3b",
  storageBucket: "fir-cbd3b.appspot.com",
  messagingSenderId: "471209642203",
  appId: "1:471209642203:web:01109bcd2d2c851844a4fe",
  measurementId: "G-LZWWWR0YTE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
