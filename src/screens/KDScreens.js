import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function KDScreen() {
    return <WebView source={{ uri: 'https://kd.sunhouse.com.vn/' }} style={{ flex: 1 }} />;
}