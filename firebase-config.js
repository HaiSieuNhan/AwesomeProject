import { FIRE_BASE_API_KEY, FIRE_BASE_STORAGE_BUCKET, FIRE_BASE_APP_ID, FIRE_BASE_PROJECT_ID, FIRE_BASE_AUTH_DOMAIN } from "@env"
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIRE_BASE_API_KEY,
  storageBucket: FIRE_BASE_STORAGE_BUCKET,
  appId: FIRE_BASE_APP_ID,
  projectId: FIRE_BASE_PROJECT_ID,
  authDomain: FIRE_BASE_AUTH_DOMAIN,
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const fbApp = getApp();
const fbStorage = getStorage();


const uploadToFirebase = async (uri, name, onProgress) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();

  const imageRef = ref(getStorage(), `images/${name}`);

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadUrl,
          metadata: uploadTask.snapshot.metadata,
        });
      }
    );
  });
};

export { fbApp, fbStorage, uploadToFirebase };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
