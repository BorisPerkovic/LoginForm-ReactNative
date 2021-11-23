import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const CreateAccount = () => {
  return (
    <View>
      <Text style={styles.text}>Don't have an account?</Text>
      <Text style={styles.account}>Create an Account.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.textColor,
    textAlign: 'center',
  },
  account: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
