import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../../constants/colors';

export const CreateAccount = () => {
  const { t } = useTranslation('login');
  return (
    <View>
      <Text style={styles.text}>Don't Have Account</Text>
      <Text style={styles.account}>Create Account</Text>
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
