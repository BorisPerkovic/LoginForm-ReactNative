import React from 'react';
import { View, StyleSheet, Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { AllRepositoriesList } from '../components/HomePage/AllRepositoriesList';
import { logOut } from '../features/auth';

export const HomePageScreen = () => {
  const { t, i18n } = useTranslation('home');
  const dispatch = useDispatch();

  const backAction = () => {
    Alert.alert('Logging Out!', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () =>
          dispatch(logOut({ name: '', password: '', isLogedIn: false })),
      },
    ]);
    return true;
  };

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });

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
