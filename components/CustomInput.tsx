import React, { FunctionComponent } from 'react';
import { TextInput } from 'react-native';

interface DefaultInputtProps {
  style?: any;
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
      style={[style]}
      onChange={onChangeText}
      autoFocus={true}
    />
  );
};
