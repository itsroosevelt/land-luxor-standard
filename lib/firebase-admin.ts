import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const initFirebase = () => {
    if (getApps().length > 0) return getFirestore();
    
    try {
        const privateKey = process.env.FIREBASE_PRIVATE_KEY 
            ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
            : undefined;

        if (!process.env.FIREBASE_PROJECT_ID || !privateKey) {
            console.warn('Firebase credentials missing in .env.local');
            return null;
        }

        const app = initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: privateKey,
            }),
        });
        return getFirestore(app);
    } catch (error) {
        console.error('Firebase admin initialization error:', error);
        return null;
    }
};

export const db = initFirebase();
