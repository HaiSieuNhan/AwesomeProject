import {FIRE_BASE_API_KEY, FIRE_BASE_STORAGE_BUCKET, FIRE_BASE_APP_ID} from "@env"
import { initializeApp, getApp, getApps } from 'firebase/app';
import {getStorage} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIRE_BASE_API_KEY,
  storageBucket: FIRE_BASE_STORAGE_BUCKET,
  appId: FIRE_BASE_APP_ID,
};

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

const fbApp = getApp();
const fbStorage = getStorage();

export { fbApp, fbStorage};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
