import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { CustomMenu } from '../components/Menu/Menu';
import { UsersRepositoriesList } from '../components/UsersRepositories/UsersRepositoriesList';

export const UserRepositoriesScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <UsersRepositoriesList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
