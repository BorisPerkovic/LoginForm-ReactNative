import React, { FunctionComponent } from 'react';
import { TextInput } from 'react-native';

interface DefaultInputtProps {
  style?: any;
  type: boolean;
  value: string;
  onChangeText: (value: string) => void;
}

export const CustomInput: FunctionComponent<DefaultInputtProps> = ({
  style,
  type,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      secureTextEntry={type}
      style={[style]}
      onChangeText={onChangeText}
      autoFocus={true}
      value={value}
    />
  );
};
