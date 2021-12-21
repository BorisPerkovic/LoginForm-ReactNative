import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginFormScreen } from '../../screens/LoginFormScreen';

export type LogInFormStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<LogInFormStackParamList>();

/* App Stack Navigator */
export const LogInFormNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginFormScreen} />
    </Stack.Navigator>
  );
};
