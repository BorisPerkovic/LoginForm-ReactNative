import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePageScreen } from '../../screens//HomePageScreen';
import { UserRepositoriesScreen } from '../../screens/UsersRepositoriesScreen';

export type AppStackParamList = {
  HomePage: undefined;
  UsersRepos: { name: string; avatatar_url: string };
};

const Stack = createStackNavigator<AppStackParamList>();

/* App Stack Navigator */
export const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="UsersRepos" component={UserRepositoriesScreen} />
    </Stack.Navigator>
  );
};
