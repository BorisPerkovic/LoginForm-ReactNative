import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomMenu } from '../components/Menu/Menu';

type UsersReposPageNavigationType = StackNavigationProp<
  AppStackParamList,
  'UsersRepos'
>;

export const UserRepositoriesScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();
  const navigation = useNavigation<UsersReposPageNavigationType>();
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <Text>This is user REPOS Screen!</Text>
        <Text>{params.name}</Text>
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
