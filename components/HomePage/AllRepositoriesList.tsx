import React from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import { useAllRepositoriesQuery } from '../../services/githubApi';

import Colors from '../../constants/colors';
import { UsersCard } from '../UsersCard';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const AllRepositoriesList = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useAllRepositoriesQuery();
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <>
      {isLoading && (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {error && <Text>Something went wrong!</Text>}
      {isSuccess && !isFetching && (
        <FlatList
          data={data?.slice(0, 30)}
          renderItem={itemData => (
            <UsersCard
              title="repositories"
              name={itemData.item.name}
              fullName={itemData.item.full_name}
              imageUrl={itemData.item.owner.avatar_url}
              viewRepositories={() => {
                navigation.navigate('UsersRepos', {
                  name: itemData.item.owner.login,
                  avatatar_url: itemData.item.owner.avatar_url,
                });
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={30}
        />
      )}
    </>
  );
};
