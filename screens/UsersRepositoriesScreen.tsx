import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { CustomMenu } from '../components/Menu/Menu';
import { UsersRepositoriesList } from '../components/UsersRepositories/UsersRepositoriesList';

export const UserRepositoriesScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <Image source={{ uri: params.avatatar_url }} style={styles.image} />
      <Text style={styles.title}>{params.name}</Text>
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
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
  },
});
