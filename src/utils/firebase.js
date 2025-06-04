// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  orderBy,
  deleteDoc
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const apiKey = process.env.VUE_APP_FIREBASE_API_KEY
const authDomain = process.env.VUE_APP_FIREBASE_AUTH_DOMAIN
const projectId = process.env.VUE_APP_FIREBASE_PROYECT_ID
const storageBucket = process.env.VUE_APP_FIREBASE_STORAGE_BUCKETS
const messagingSenderId = process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.VUE_APP_FIREBASE_API_ID
// console.log(url)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//utils

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {
  db,
  auth,
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  storageRef,
  uploadBytes,
  getDownloadURL,
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  orderBy,
  deleteDoc
};
