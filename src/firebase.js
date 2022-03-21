import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1PqAbatVyu-IA2sCn8WwNdOiFdLqysRc",
  authDomain: "manish-todo.firebaseapp.com",
  projectId: "manish-todo",
  storageBucket: "manish-todo.appspot.com",
  messagingSenderId: "952618122424",
  appId: "1:952618122424:web:62aede7e1721a22e2c084d",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
