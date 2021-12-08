import React, { useState, useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';
import axios, { AxiosResponse } from 'axios';

import Colors from '../constants/colors';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

interface DataTypes {
  id: number;
  name: string;
  avatar: string;
  full_name: string;
}

export const HomePageScreen = () => {
  const [repos, setRepos] = useState<DataTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const { t, i18n } = useTranslation('home');
  const { params } = useRoute<RouteProp<AppStackParamList, 'HomePage'>>();
  const navigation = useNavigation<HomePageNavigationType>();

  useEffect(() => {
    setFetchError('');
    setIsLoading(true);
    axios
      .get<DataTypes[]>('https://api.github.com/repositories')
      .then(response => {
        setIsLoading(false);
        setRepos(response.data);
      })
      .catch(err => {
        if (err.response) {
          setFetchError('something went wrong!');
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        {isLoading && (
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        )}
        {fetchError !== '' && <Text>{fetchError}</Text>}
        {!isLoading && fetchError === '' && (
          <FlatList
            data={repos}
            renderItem={itemData => (
              <Text>Full Name: {itemData.item.full_name}</Text>
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
});
