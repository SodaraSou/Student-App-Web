import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHBE8XQ3b1nPAMHN81QoDXGFRPNmTXUO4",
  authDomain: "student-app-2ba92.firebaseapp.com",
  databaseURL:
    "https://student-app-2ba92-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-app-2ba92",
  storageBucket: "student-app-2ba92.appspot.com",
  messagingSenderId: "521090483931",
  appId: "1:521090483931:web:5925a9a0ef9c6414382efe",
  measurementId: "G-22Y0Z5XR0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
