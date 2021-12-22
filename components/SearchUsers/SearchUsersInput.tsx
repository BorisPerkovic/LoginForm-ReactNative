import React, { FunctionComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../../constants/colors';

interface DefaultInputtProps {
  type: 'text' | 'password';
  value: string;
  onChangeText: (value: string) => void;
}

export const SearchUsersInput: FunctionComponent<DefaultInputtProps> = ({
  type,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={type === 'password'}
      value={value}
      onChangeText={onChangeText}
      placeholder="Type Username"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
});
