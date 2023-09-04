import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KPIScreen from './KPIScreens';
import KDScreen from './KDScreens';
import QCScreen from './QCScreens';
import CameraScreens from './CameraScreens';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="KPI"
        component={KPIScreen}
        options={{
          tabBarIcon: () =>  <Ionicons name="podium" size={32} color="black" />
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreens}
        options={{
          tabBarIcon: () =>  <Ionicons name="md-camera" size={32} color="black" />
        }} />
      <Tab.Screen
        name="Upload IMG"
        component={KDScreen}
        options={{
          tabBarIcon: () =>  <Ionicons name="cloud-upload" size={32} color="black" />
        }}
      />
      <Tab.Screen
        name="Location"
        component={QCScreen}
        options={{
          tabBarIcon: () =>  <Ionicons name="compass" size={32} color="black" />
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;