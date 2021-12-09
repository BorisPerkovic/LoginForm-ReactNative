import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomMenu } from '../components/Menu/Menu';
import { useFetchUsersRepositories } from '../hooks/useFetchUsersRepositories';

import Colors from '../constants/colors';

type UsersReposPageNavigationType = StackNavigationProp<
  AppStackParamList,
  'UsersRepos'
>;

export const UserRepositoriesScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();
  const navigation = useNavigation<UsersReposPageNavigationType>();
  const requestState = useFetchUsersRepositories(params.name);

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
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
