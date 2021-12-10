import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { CustomMenu } from '../components/Menu/Menu';
import { UsersRepositoriesList } from '../components/UsersRepositories/UsersRepositoriesList';

export const UserRepositoriesScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();

  console.log('render');

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <UsersRepositoriesList name={params.name} />
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
