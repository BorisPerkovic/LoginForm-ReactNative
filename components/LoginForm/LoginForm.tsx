import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../../constants/colors';

export const LoginForm: FunctionComponent = ({ children }) => {
  const { t } = useTranslation('login');
  return (
    <View style={styles.inputContainer}>
      {children}
      <Text style={styles.text}>{t('forgot_password')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 35,
  },
  text: {
    color: Colors.textColor,
    textAlign: 'center',
    marginVertical: 10,
  },
});
