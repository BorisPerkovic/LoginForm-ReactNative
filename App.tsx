import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogInFormNavigator } from './navigation/Stacks/LoginFormStack';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { DrawerNavigator } from './navigation/Drawer';

const App = () => {
  const token = useSelector((state: RootStateOrAny) => state.token.value);

  return (
    <PaperProvider>
      <NavigationContainer>
        {token.isLogedIn && <DrawerNavigator />}
        {!token.isLogedIn && <LogInFormNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
