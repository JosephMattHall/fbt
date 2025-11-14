
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNQT-I3YTHbIumVqDZxpozt71vrEsT6WM",
  authDomain: "firstbaketortillas-5c476.firebaseapp.com",
  projectId: "firstbaketortillas-5c476",
  storageBucket: "firstbaketortillas-5c476.firebasestorage.app",
  messagingSenderId: "347740383722",
  appId: "1:347740383722:web:4db232ead292640f026a93",
  measurementId: "G-SSBPV6JHNN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
