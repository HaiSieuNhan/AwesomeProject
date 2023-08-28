import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function KPIScreen() {
    return <WebView source={{ uri: 'https://kpi.sunhouse.com.vn/' }} style={{ flex: 1 }} />;
}