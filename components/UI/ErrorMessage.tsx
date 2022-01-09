import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../constants/colors';

interface MessageProps {
  message?: string;
}

export const ErrorMessage: FunctionComponent<MessageProps> = ({ message }) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: Colors.errorColor,
    fontSize: 13,
  },
});
