import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigatation/BottomTabNavigator';
import SplashScreen from './src/screens/SplashScreen';
import DetailsScreen from './src/screens/DetailsScreen'; // Import the DetailsScreen
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ contentStyle: { flex: 1 } }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: true,
            title: 'Details',
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
