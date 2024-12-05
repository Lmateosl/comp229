import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import dotenv from 'dotenv';
import { generateToken } from "./services/newsServices.js";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE,
  messagingSenderId: process.env.FIREBASE_MESSAGING,
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export async function createUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Register:", userCredential.user.uid, `TOKEN: ${generateToken(userCredential.user.uid)}`);
      return userCredential.user;
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error (error.message);
    }
}

export async function logInUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User log:", userCredential.user.uid, `TOKEN: ${generateToken(userCredential.user.uid)}`);
      return userCredential.user;
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error (error.message);
    }
}
