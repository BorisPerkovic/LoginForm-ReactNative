import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

interface DueafultButtonProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  disabled: boolean;
  buttonTextStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export const CustomButton: FunctionComponent<DueafultButtonProps> = ({
  style,
  title,
  buttonTextStyle,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
  },
});
