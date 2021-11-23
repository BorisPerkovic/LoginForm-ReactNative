import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../constants/colors';

export const ErrorMessage: FunctionComponent = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: Colors.errorColor,
    fontSize: 13,
  },
});
