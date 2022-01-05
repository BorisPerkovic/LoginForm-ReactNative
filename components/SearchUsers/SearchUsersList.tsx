import React, { FunctionComponent } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';

import Colors from '../../constants/colors';
import { UsersCard } from '../UsersCard';
import { useSearchUsersQuery } from '../../services/reportsAPI';

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
  const { data, error, isFetching, isSuccess } = useSearchUsersQuery(param);
  const navigation = useNavigation<HomePageNavigationType>();

  return (
    <>
      {isFetching && (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {error && (
        <Text style={{ textAlign: 'center' }}>Something went wrong!</Text>
      )}
      {isSuccess &&
        !isFetching &&
        (data?.length !== 0 ? (
          <FlatList
            data={data}
            renderItem={itemData => (
              <UsersCard
                title="repositories"
                name={itemData.item.login}
                fullName={itemData.item.login}
                imageUrl={itemData.item.avatarUrl}
                viewRepositories={() => {
                  navigation.navigate('UsersRepos', {
                    name: itemData.item.login,
                    avatatar_url: itemData.item.avatarUrl,
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
