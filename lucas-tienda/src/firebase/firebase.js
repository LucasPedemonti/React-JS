
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXA-h2jcN6SVwoWmc2DiMRlWyqn-PtTvI",
  authDomain: "lp-tienda.firebaseapp.com",
  projectId: "lp-tienda",
  storageBucket: "lp-tienda.appspot.com",
  messagingSenderId: "208193321579",
  appId: "1:208193321579:web:eb675010a5b6ca5a408f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);