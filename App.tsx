import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './navigation/RootStack';
import { Provider as PaperProvider } from 'react-native-paper';

LogBox.ignoreLogs(["EventEmitter.removeListener('"]);

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
