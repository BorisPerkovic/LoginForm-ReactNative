import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchUsersScreen } from '../../screens/SearchUsersScreen';
import { EditAccount } from '../../screens/EditAcoountScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type AccountBottomTabsParamList = {
  Search: undefined;
  Edit: undefined;
};

const AccountBottomTabsNavigator =
  createBottomTabNavigator<AccountBottomTabsParamList>();

/* App Bottom Tab Navigator */
export const AccountBottomTabNavigator = () => {
  return (
    <AccountBottomTabsNavigator.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <AccountBottomTabsNavigator.Screen
        name="Search"
        component={SearchUsersScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
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
