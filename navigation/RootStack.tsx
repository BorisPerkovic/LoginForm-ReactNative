import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './Drawer';
import { LoginFormScreen } from '../screens/LoginFormScreen';
import { useSelector, RootStateOrAny } from 'react-redux';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const userIsAuthenticated = useSelector(
    (state: RootStateOrAny) => state.user.isAuthenticated,
  );

  return (
    <RootStack.Navigator headerMode="none">
      {userIsAuthenticated ? (
        <RootStack.Screen
          name="App"
          component={DrawerNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="LogIn"
          component={LoginFormScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};
