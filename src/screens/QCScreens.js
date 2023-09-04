import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QCScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const GetCurrentLocation = async () => {
    text = "Waiting..";
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={GetCurrentLocation}>
        <Ionicons name="refresh-circle-outline" size={32} color="white" />
      </Pressable>
      <Text style={styles.paragraph}>{JSON.stringify(location)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 35,
    top: 750,
    zIndex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 15,
  },
});
