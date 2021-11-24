import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

interface DueafultButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

export const LoginButton: FunctionComponent<DueafultButtonProps> = ({
  title,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '45%',
    backgroundColor: Colors.buttonColor,
    height: Dimensions.get('window').width >= 350 ? 50 : 35,
    marginVertical: Dimensions.get('window').width >= 350 ? 50 : 20,
    borderRadius: 30,
  },
  buttonDisabled: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '45%',
    backgroundColor: Colors.buttonColor,
    height: Dimensions.get('window').width >= 350 ? 50 : 35,
    marginVertical: Dimensions.get('window').width >= 350 ? 50 : 20,
    opacity: 0.5,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 15,
    color: 'black',
    textAlign: 'center',
  },
});
