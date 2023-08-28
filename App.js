import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreens'


export default function App() {
  return (
    <NavigationContainer>
    <HomeScreen />
    <StatusBar />
  </NavigationContainer>
  );
}

