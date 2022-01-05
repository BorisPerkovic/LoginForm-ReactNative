import React from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import { useCandidatesQuery } from '../../services/reportsAPI';

import Colors from '../../constants/colors';
import { UsersCard } from '../UsersCard';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const CandidatesList = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useCandidatesQuery();

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
          renderItem={itemData => {
            return (
              <UsersCard
                title={`${itemData.item.name} reports`}
                name={itemData.item.name}
                email={itemData.item.email}
                imageUrl={itemData.item.avatar}
                viewRepositories={() => {
                  navigation.navigate('CandReports', {
                    candidateId: itemData.item.id,
                    name: itemData.item.name,
                    avatatar_url: itemData.item.avatar,
                  });
                }}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={30}
        />
      )}
    </>
  );
};
