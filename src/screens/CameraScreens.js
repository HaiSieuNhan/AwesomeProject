import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { listFiles, uploadToFirebase,fbStorage,listAll,ref,getDownloadURL } from "../../firebase-config";
import { useState, useEffect } from "react";
import MyFilesList from "../../MyList";
import MyFilesListV2 from "./MyFilesListV2";

export default function CameraScreens() {
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  const [files, setFiles] = useState([]);
   const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   listFiles().then((listResp) => {
  //     const files = listResp.map((value) => {
  //       return { name: value.fullPath };
  //     });
  //     setFiles(files);
  //   });
  // }, []);


  useEffect(() => {
    // Lấy danh sách các ảnh từ Firebase Storage
    async function fetchImageUrls() {
      const imageRefs = await listAll(ref(fbStorage, 'images'));
      const urls = await Promise.all(
        imageRefs.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      setImageUrls(urls);
    }

    fetchImageUrls();
  }, []);

  const takePhoto = async () => {
    try {
      const cameraResp = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });

      if (!cameraResp.canceled) {
        const { uri } = cameraResp.assets[0];
        const fileName = uri.split("/").pop();
        const uploadResp = await uploadToFirebase(uri, fileName, (v) =>
          console.log(v)
        );

        const imageRefs = await listAll(ref(fbStorage, 'images'));
        const urls = await Promise.all(
          imageRefs.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setImageUrls(urls);

      }
    } catch (e) {
      Alert.alert("Error Uploading Image " + e.message);
    }
  };

  ///Permission
  if (permission?.status !== ImagePicker.PermissionStatus.GRANTED) {
    return (
      <View style={styles.container}>
        <Text>Permission Not granted - {permission?.status}</Text>
        <StatusBar style="auto" />
        <Button title="Request Permission" onPress={requestPermission}></Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text>Upload IMG to FireBase</Text> */}
        {/* <MyFilesList files={files} /> */}
        <Button title="Camera" onPress={takePhoto}></Button>
        <MyFilesListV2 imageUrls={imageUrls} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
  },
});
