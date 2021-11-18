import React, { FunctionComponent } from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Colors from '../constants/colors';

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
    <Button style={[styles.button, style]} mode="contained" onPress={onPress}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
  },
});
