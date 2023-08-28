import { StyleSheet, Text, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
export default function CameraScreens() {

  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

if (permission?.status !== ImagePicker.PermissionStatus.GRANTED){
  return (
    <View style={styles.container}>
      <Text>Permission Not granted - {permission?.status}</Text>
      <StatusBar style="auto" />
      <Button title  = "Request Permission" onPress = {requestPermission}></Button>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text>Working with firebase and Image Picker</Text>
      <StatusBar style="auto" />
      <Button title  = "Take Picture" onPress = {requestPermission}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  }
});