import React, { FunctionComponent } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';

import Colors from '../../constants/colors';
import { useFetchUsersRepositories } from '../../hooks/useFetchUsersRepositories';

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
          renderItem={itemData => <Text>{itemData.item.name}</Text>}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={25}
        />
      )}
    </>
  );
};
