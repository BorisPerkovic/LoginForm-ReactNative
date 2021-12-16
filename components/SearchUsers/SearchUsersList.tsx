import React, { FunctionComponent } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import { useFetchSearchUsers } from '../../hooks/useFetchSearchUsers';

import Colors from '../../constants/colors';
import { UsersCard } from '../UsersCard';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

interface SearchSUersProps {
  param: string;
}

export const SearchUsersList: FunctionComponent<SearchSUersProps> = ({
  param,
}) => {
  const requestState = useFetchSearchUsers(param);
  const datas = requestState.data;
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <>
      {requestState.status === 'loading' && (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {requestState.status === 'error' && (
        <Text style={{ textAlign: 'center' }}>Something went wrong!</Text>
      )}
      {requestState.status === 'resolved' &&
        (datas.length !== 0 && datas.length ? (
          <FlatList
            data={datas}
            renderItem={itemData => (
              <UsersCard
                title="repositories"
                name={itemData.item.login}
                fullName={itemData.item.login}
                imageUrl={itemData.item.avatar_url}
                viewRepositories={() => {
                  navigation.navigate('UsersRepos', {
                    name: itemData.item.login,
                    avatatar_url: itemData.item.avatar_url,
                  });
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
            maxToRenderPerBatch={30}
          />
        ) : (
          <Text style={{ textAlign: 'center' }}>No users found!</Text>
        ))}
    </>
  );
};
