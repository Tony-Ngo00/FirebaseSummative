import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEAneuT8bxfZjDfCFpHE6dAZepSi6E18I",
  authDomain: "ics4u-296d2.firebaseapp.com",
  projectId: "ics4u-296d2",
  storageBucket: "ics4u-296d2.appspot.com",
  messagingSenderId: "627983845597",
  appId: "1:627983845597:web:ad4db2d4ad82d4d6b37334",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage };
