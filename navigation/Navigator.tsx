import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/colors';
import { LoginFormScreen } from '../screens/LoginFormScreen';
import { HomePageScreen } from '../screens/HomePageScreen';
import { MapsScreen } from '../screens/MapsScreen';

export type RootStackParamList = {
  LogIn: undefined;
  HomePage: { userId: string };
  App: undefined;
  Maps: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const BottomTabsNavigator = createBottomTabNavigator<RootStackParamList>();

/* Main Navigator */
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LoginFormScreen} />
      <Stack.Screen name="HomePage" component={HomePageScreen} />
    </Stack.Navigator>
  );
};

/* Bottom Tab Navigator */
export const BottomTabNavigator = () => {
  return (
    <BottomTabsNavigator.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <BottomTabsNavigator.Screen
        name="App"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <BottomTabsNavigator.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'list-circle' : 'list-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </BottomTabsNavigator.Navigator>
  );
};
