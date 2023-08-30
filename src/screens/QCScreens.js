import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location'
import { useEffect,useState } from 'react';

export default function QCScreen() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

     useEffect(() => {
        (async() => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

        })()
     },[]);


     let text = 'Waiting..';
     if (errorMsg) {
       text = errorMsg;
     } else if (location) {
       text = JSON.stringify(location);
     }

     return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{text}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    item: {
      padding:8,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
  });