import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';
import { UsersCard } from '../components/UsersCard';
import { useFetchAllRepositories } from '../hooks/useFetchAllRepositories';

import Colors from '../constants/colors';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const HomePageScreen = () => {
  const requestState = useFetchAllRepositories();
  const { t, i18n } = useTranslation('home');
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.containerContent}>
        {requestState.status === 'loading' && (
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        )}
        {requestState.status === 'error' && <Text>Something went wrong!</Text>}
        {requestState.status === 'resolved' && (
          <FlatList
            data={requestState.data}
            renderItem={itemData => (
              <UsersCard
                title="repositories"
                name={itemData.item.name}
                fullName={itemData.item.full_name}
                imageUrl={itemData.item.owner.avatar_url}
                viewRepositories={() => {
                  navigation.navigate('UsersRepos', {
                    name: itemData.item.owner.login,
                  });
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
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
