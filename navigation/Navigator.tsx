import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginFormScreen } from '../screens/LoginFormScreen';
import { HomePageScreen } from '../screens/HomePageScreen';

export type RootStackParamList = {
  LogIn: undefined;
  HomePage: { userId: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="LogIn"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="LogIn" component={LoginFormScreen} />
      <RootStack.Screen name="HomePage" component={HomePageScreen} />
    </RootStack.Navigator>
  );
};
