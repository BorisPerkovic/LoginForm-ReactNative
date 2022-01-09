import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppBottomTabNavigator } from './Bottomtabs/AppBottomTabs';
import { AccountBottomTabNavigator } from './Bottomtabs/AccountBottomTabs';
import { ReportsBottomTabNavigator } from './Bottomtabs/ReportsBottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Contact } from '../screens/ContactScreen';
import { CustomDrawer } from './CustomDrawer/CustomDrawer';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="App"
      drawerContent={props => <CustomDrawer props={props} />}
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
        name="Search"
        component={AccountBottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
      <DrawerStack.Screen
        name="Reports"
        component={ReportsBottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Octicons name="report" size={size} color={color} />;
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
