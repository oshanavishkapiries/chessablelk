import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_KEY_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_KEY_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_KEY_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_KEY_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_KEY_MESSAGING_SENDEER_ID,
  appId: process.env.NEXT_PUBLIC_KEY_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_KEY_MEASUREMEN_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


