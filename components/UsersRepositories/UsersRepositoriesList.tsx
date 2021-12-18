import React, { FunctionComponent } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import Colors from '../../constants/colors';
import { useUsersRepositoriesQuery } from '../../services/githubApi';
import { UsersRepositoriesCard } from '../UsersRepositoriesCard';

interface UsersReposProps {
  name: string;
}

export const UsersRepositoriesList: FunctionComponent<UsersReposProps> = ({
  name,
}) => {
  const { data, error, isFetching, isSuccess } =
    useUsersRepositoriesQuery(name);

  return (
    <>
      {isFetching && (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {error && (
        <Text style={{ textAlign: 'center' }}>Something went wrong!</Text>
      )}
      {isSuccess && !isFetching && (
        <FlatList
          data={data}
          renderItem={itemData => (
            <UsersRepositoriesCard
              repoName={itemData.item.name}
              title="view details"
              description={
                itemData.item.description
                  ? itemData.item.description
                  : 'No description'
              }
              languages={
                itemData.item.language
                  ? itemData.item.language
                  : 'No details about languages'
              }
              viewRepository={() => {}}
            />
          )}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={25}
        />
      )}
    </>
  );
};
