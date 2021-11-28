import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackNavigator } from '../Stacks/AppStack';
import { AppStackParamList } from '../Stacks/AppStack';

import { MapsScreen } from '../../screens/MapsScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type AppBottomTabsParamList = {
  App: AppStackParamList;
  Maps: undefined;
};

const AppBottomTabsNavigator =
  createBottomTabNavigator<AppBottomTabsParamList>();

/* App Bottom Tab Navigator */
export const AppBottomTabNavigator = () => {
  return (
    <AppBottomTabsNavigator.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <AppBottomTabsNavigator.Screen
        name="App"
        component={AppStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <AppBottomTabsNavigator.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'list-circle' : 'list-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </AppBottomTabsNavigator.Navigator>
  );
};
