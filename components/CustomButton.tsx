import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Colors from '../constants/colors';

interface DueafultButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton: FunctionComponent<DueafultButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <Button style={styles.button} mode="contained" onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '55%',
    backgroundColor: Colors.buttonColor,
    borderRadius: 30,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});
