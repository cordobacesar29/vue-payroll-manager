// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword
} from "firebase/auth";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjpkAi_I6V_fBVsMiIvAasusrx8_lRVaw",
  authDomain: "payroll-manager-45518.firebaseapp.com",
  projectId: "payroll-manager-45518",
  storageBucket: "payroll-manager-45518.firebasestorage.app",
  messagingSenderId: "433067478630",
  appId: "1:433067478630:web:fca13726235140d36f27a7",
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
  addDoc
};
