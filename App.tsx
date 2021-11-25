import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import './in18n/translations';

import { Navigator } from './navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
