import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginFormScreen } from '../../screens/LoginFormScreen';
import { HomePageScreen } from '../../screens//HomePageScreen';

export type AppStackParamList = {
  HomePage: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

/* App Stack Navigator */
export const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginFormScreen} />
      <Stack.Screen name="HomePage" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
