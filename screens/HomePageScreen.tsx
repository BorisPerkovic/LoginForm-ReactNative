import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Drawer';
import { useTranslation } from 'react-i18next';

type HomePageNavigationType = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;

import Colors from '../constants/colors';

export const HomePageScreen = () => {
  const { t, i18n } = useTranslation('home');
  const { params } = useRoute<RouteProp<RootStackParamList, 'HomePage'>>();
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <View style={styles.container}>
      <Text>{t('gome_page_title')}</Text>
      <Text style={{ marginVertical: 10 }}>{t('params')}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title={t('go_back')}
          color={Colors.primaryColor}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={t('translate_to')}
          color={Colors.primaryColor}
          onPress={() => {
            i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
          }}
        />
        <Button
          title={'Go to Screen 1'}
          color={Colors.primaryColor}
          onPress={() => {
            navigation.navigate('Screen1');
          }}
        />
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
  buttonsContainer: {
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
