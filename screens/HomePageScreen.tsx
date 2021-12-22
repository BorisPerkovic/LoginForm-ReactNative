import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { AllRepositoriesList } from '../components/HomePage/AllRepositoriesList';

export const HomePageScreen = () => {
  const { t, i18n } = useTranslation('home');

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.containerContent}>
        <AllRepositoriesList />
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
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
