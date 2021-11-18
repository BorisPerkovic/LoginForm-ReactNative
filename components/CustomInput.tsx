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
      autoFocus={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'white',
    fontSize: 18,
  },
});
