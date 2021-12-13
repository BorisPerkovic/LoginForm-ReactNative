import React, { FunctionComponent } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';

import Colors from '../../constants/colors';
import { useFetchUsersRepositories } from '../../hooks/useFetchUsersRepositories';
import { UsersRepositoriesCard } from '../UsersRepositoriesCard';

interface UsersReposProps {
  name: string;
}

export const UsersRepositoriesList: FunctionComponent<UsersReposProps> = ({
  name,
}) => {
  const requestState = useFetchUsersRepositories(name);

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
