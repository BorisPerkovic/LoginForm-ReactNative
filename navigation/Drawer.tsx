import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppBottomTabNavigator } from './Bottomtabs/AppBottomTabs';
import { AccountBottomTabNavigator } from './Bottomtabs/AccountBottomTabs';
import { CompanyBottomTabNavigator } from './Bottomtabs/CompanyBottomTabs';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator initialRouteName="App">
      <DrawerStack.Screen name="App" component={AppBottomTabNavigator} />
      <DrawerStack.Screen
        name="Account"
        component={AccountBottomTabNavigator}
      />
      <DrawerStack.Screen
        name="Company"
        component={CompanyBottomTabNavigator}
      />
    </DrawerStack.Navigator>
  );
};
