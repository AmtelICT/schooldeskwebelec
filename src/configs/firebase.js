import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyCO6ZOgDOawSmrbGCVWMCRUNZ8cHayr4dI",
  authDomain: "almuminfeesapp.firebaseapp.com",
  projectId: "almuminfeesapp",
  storageBucket: "almuminfeesapp.appspot.com",
  messagingSenderId: "303661046367",
  appId: "1:303661046367:web:362ad6449598fadf2b59ea",
  measurementId: "G-JL77QW6RJ1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
