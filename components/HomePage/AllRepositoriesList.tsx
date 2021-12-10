import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import { useFetchAllRepositories } from '../../hooks/useFetchAllRepositories';

import Colors from '../../constants/colors';
import { UsersCard } from '../UsersCard';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const AllRepositoriesList = () => {
  const requestState = useFetchAllRepositories();
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <>
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
    </>
  );
};
