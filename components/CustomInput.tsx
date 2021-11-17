import React, { FunctionComponent } from 'react';
import { TextInput, StyleSheet, StyleProp, TextInputProps } from 'react-native';

interface DefaultInputtProps {
  style?: StyleProp<TextInputProps>;
  type: boolean;
  onChangeText: () => void;
}

export const CustomInput: FunctionComponent<DefaultInputtProps> = ({
  style,
  type,
  onChangeText,
}) => {
  return (
    <TextInput
      secureTextEntry={type}
      style={[styles.input, style]}
      onChange={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
