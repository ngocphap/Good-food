import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqZw8xeuPgxoETPGra9GjSrZL3HfkK3e8",
  authDomain: "goodfood-97d90.firebaseapp.com",
  projectId: "goodfood-97d90",
  storageBucket: "goodfood-97d90.appspot.com",
  messagingSenderId: "211496449029",
  appId: "1:211496449029:web:e0d8ce42c028d5567a986c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
