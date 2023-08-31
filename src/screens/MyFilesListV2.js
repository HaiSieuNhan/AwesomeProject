import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { FIRE_BASE_API_KEY, FIRE_BASE_STORAGE_BUCKET, FIRE_BASE_APP_ID, FIRE_BASE_PROJECT_ID, FIRE_BASE_AUTH_DOMAIN } from "@env"
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,listAll } from "firebase/storage";
import { Alert} from 'react-native';
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

function ImageList({ imageUrls }) {
  //const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   // Khởi tạo Firebase Storage
  //   const storage = getStorage();

  //   // Lấy danh sách các ảnh từ Firebase Storage
  //   async function fetchImageUrls() {
  //     const imageRefs = await listAll(ref(storage, 'images'));
  //     const urls = await Promise.all(
  //       imageRefs.items.map(async (itemRef) => {
  //         const url = await getDownloadURL(itemRef);
  //         return url;
  //       })
  //     );
  //     setImageUrls(urls);
  //   }

  //   fetchImageUrls();
  // }, []);

  return (
    <View>
      <FlatList
        data={imageUrls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: item }}
          />
        )}
      />
    </View>
  );
}

export default ImageList;
