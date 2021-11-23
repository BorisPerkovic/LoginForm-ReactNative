import React, { FunctionComponent } from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

interface DefaultInputtProps {
  title: string;
  type: 'text' | 'password';
  onChangeText: (value: string) => void;
}

export const CustomInput: FunctionComponent<DefaultInputtProps> = ({
  title,
  type,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={type === 'password'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: Dimensions.get('window').width >= 350 ? 15 : 12,
    marginTop: Dimensions.get('window').width >= 350 ? 30 : 20,
    color: Colors.textColor,
  },
  input: {
    height: Dimensions.get('window').width >= 350 ? 40 : 35,
    borderBottomColor: Colors.inputBorderColor,
    borderBottomWidth: Dimensions.get('window').width >= 350 ? 3 : 2,
    color: 'white',
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 13,
  },
});
