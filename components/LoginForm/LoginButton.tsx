import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

interface DueafultButtonProps {
  title: string;
  onPress: () => void;
}

export const LoginButton: FunctionComponent<DueafultButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
  },
  buttonText: {
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 15,
    color: 'black',
    textAlign: 'center',
  },
});
