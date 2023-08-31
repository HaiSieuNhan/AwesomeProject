import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KPIScreen from './KPIScreens';
import KDScreen from './KDScreens';
import QCScreen from './QCScreens';
import CameraScreens from './CameraScreens';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="KPI"
        component={KPIScreen}
        options={{
          tabBarIcon: () => <Text>😀</Text>
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreens}
        options={{
          tabBarIcon: () => <Text>🙃</Text>
        }} />
      <Tab.Screen
        name="Upload IMG"
        component={KDScreen}
        options={{
          tabBarIcon: () => <Text>😅</Text>
        }}
      />
      <Tab.Screen
        name="Location"
        component={QCScreen}
        options={{
          tabBarIcon: () => <Text>😗</Text>
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;