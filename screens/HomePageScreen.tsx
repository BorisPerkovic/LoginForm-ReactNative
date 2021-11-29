import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

import Colors from '../constants/colors';

export const HomePageScreen = () => {
  const { t, i18n } = useTranslation('home');
  const { params } = useRoute<RouteProp<AppStackParamList, 'HomePage'>>();
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <Text>{t('gome_page_title')}</Text>
        <Text style={{ marginVertical: 10 }}>{t('params')}</Text>
        <View>
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
        </View>
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
