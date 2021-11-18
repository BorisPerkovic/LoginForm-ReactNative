import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  Text,
} from 'react-native';

interface DueafultButtonProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export const CustomButton: FunctionComponent<DueafultButtonProps> = ({
  style,
  title,
  buttonTextStyle,
  onPress,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[buttonTextStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
  },
});
