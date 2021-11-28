import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppBottomTabNavigator } from './Bottomtabs/AppBottomTabs';
import { ScreenDrawer2 } from '../screens/ScreenDrawer2';
import { ScreenDrawer1 } from '../screens/ScreenDrawer1';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator initialRouteName="App">
      <DrawerStack.Screen name="App" component={AppBottomTabNavigator} />
      <DrawerStack.Screen name="Screen1" component={ScreenDrawer1} />
      <DrawerStack.Screen name="Screen2" component={ScreenDrawer2} />
    </DrawerStack.Navigator>
  );
};
