import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreens'


export default function App() {
  return (
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  );
}

