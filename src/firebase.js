// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMN11fhFsc4TfY4RbK8SzfaQ9-iWop0PI",
  authDomain: "my-checklist-5c7aa.firebaseapp.com",
  projectId: "my-checklist-5c7aa",
  storageBucket: "my-checklist-5c7aa.appspot.com",
  messagingSenderId: "914990722652",
  appId: "1:914990722652:web:c79dc964727aaf03030099",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore();
