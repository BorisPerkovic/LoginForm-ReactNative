import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Account } from '../../screens/AccountScreen';
import { EditAccount } from '../../screens/EditAcoountScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type AccountBottomTabsParamList = {
  Account: undefined;
  Edit: undefined;
};

const AccountBottomTabsNavigator =
  createBottomTabNavigator<AccountBottomTabsParamList>();

/* App Bottom Tab Navigator */
export const AccountBottomTabNavigator = () => {
  return (
    <AccountBottomTabsNavigator.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <AccountBottomTabsNavigator.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
      <AccountBottomTabsNavigator.Screen
        name="Edit"
        component={EditAccount}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </AccountBottomTabsNavigator.Navigator>
  );
};
