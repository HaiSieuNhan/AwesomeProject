import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function QCScreen() {
    return <WebView source={{ uri: 'https://qc.sunhouse.com.vn/' }} style={{ flex: 1 }} />;
}