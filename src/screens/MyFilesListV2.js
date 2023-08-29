import React, { useState, useEffect } from 'react';
import { View, Image,Text,FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

import { FIRE_BASE_API_KEY, FIRE_BASE_STORAGE_BUCKET, FIRE_BASE_APP_ID, FIRE_BASE_PROJECT_ID, FIRE_BASE_AUTH_DOMAIN } from "@env"
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL,listAll } from "firebase/storage";


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

const MyFilesListV2 = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        // Thay đổi 'images' thành đường dẫn thư mục chứa ảnh trên Firebase Storage của bạn.
        //const storageRef = firebase.storage().ref('images');
    
        const storage = getStorage();

// Create a reference under which you want to list
        const listRef = ref(storage, 'images');
        // Lấy danh sách tất cả các ảnh trong thư mục.
        listAll(listRef)
          .then((result) => {
            const imageUrls = [];
            result.items.forEach((itemRef) => {
              itemRef.getDownloadURL().then((url) => {
                imageUrls.push(url);
                setImages([...imageUrls]);
              });
            });
          })
          .catch((error) => {
            console.error('Error getting images from Firebase Storage:', error);
          });
      }, []);
  
    return (
      <View>
        <Text>Ảnh từ Firebase Storage</Text>
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: 200, height: 200 }}
            />
          )}
        />
      </View>
    );
  };
  

export default MyFilesListV2;