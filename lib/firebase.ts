import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCyXCSXC-0vXyAD-Hw126NlO4FVgjVyB4",
    authDomain: "landluxor.firebaseapp.com",
    projectId: "landluxor",
    storageBucket: "landluxor.firebasestorage.app",
    messagingSenderId: "689211211560",
    appId: "1:689211211560:web:0c6ed4b890f00f4c13da1d",
    measurementId: "G-R7LJFYLE4R"
};

// Initialize Firebase only if it hasn't been initialized yet
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
