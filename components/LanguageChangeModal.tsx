import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/colors';

interface LangugageModalProps {
  onLanguageChange: (isModalVidible: boolean) => void;
}

export const LanguageChangeModal: FunctionComponent<LangugageModalProps> = ({
  onLanguageChange,
}) => {
  const { i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Pressable
          onPress={() => {
            i18n.changeLanguage('en');
            onLanguageChange(false);
          }}>
          <Text style={styles.text}>English</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            i18n.changeLanguage('de');
            onLanguageChange(false);
          }}>
          <Text style={styles.text}>Deutschland</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 15,
    paddingHorizontal: 5,
    backgroundColor: Colors.secondaryColor,
  },
  text: {
    padding: 5,
    color: Colors.primaryColor,
  },
});
