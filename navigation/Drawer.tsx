import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppBottomTabNavigator } from './Bottomtabs/AppBottomTabs';
import { AccountBottomTabNavigator } from './Bottomtabs/AccountBottomTabs';
import { CompanyBottomTabNavigator } from './Bottomtabs/CompanyBottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Contact } from '../screens/ContactScreen';
import { CustomDrawer } from './CustomDrawer/CustomDrawer';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="App"
      drawerContent={props => <CustomDrawer navigation={props} />}
      drawerStyle={{
        backgroundColor: '#f4f4f4',
      }}>
      <DrawerStack.Screen
        name="App"
        component={AppBottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <DrawerStack.Screen
        name="Account"
        component={AccountBottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
      <DrawerStack.Screen
        name="Company"
        component={CompanyBottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <DrawerStack.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="mail-outline" size={size} color={color} />;
          },
        }}
      />
    </DrawerStack.Navigator>
  );
};
