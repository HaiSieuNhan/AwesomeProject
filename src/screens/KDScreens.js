import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator, Pressable } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { listFiles, uploadToFirebase } from "../../firebase-config";

export default function App() {

    const [image, setImage] = useState(null)
    const [uploading, setUploading] = useState(false)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadImage = async () => {

        if ([null, undefined].includes(image)) {
            alert("Please select an image")
            return;
        }

        const fileName = image.split("/").pop();
        await uploadToFirebase(image, fileName, (v) =>
            console.log(v)
        );
    }

    return (
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />}
            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={styles.text}>Select Image</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={uploadImage}>
                <Text style={styles.text}>Upload Image</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 2,
        backgroundColor: '#BEADFA',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
