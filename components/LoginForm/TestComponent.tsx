import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

export const TestComponent: FunctionComponent = ({ children }) => {
  return <Text>{children}</Text>;
};
