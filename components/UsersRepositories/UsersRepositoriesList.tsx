import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';
import Colors from '../../constants/colors';
import { useUsersRepositoriesQuery } from '../../services/githubApi';
import { UsersRepositoriesCard } from '../UsersRepositoriesCard';

export const UsersRepositoriesList = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'UsersRepos'>>();
  const { data, error, isFetching, isSuccess } = useUsersRepositoriesQuery(
    params.name,
  );

  return (
    <>
      {isFetching && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
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
          maxToRenderPerBatch={20}
          ListHeaderComponent={() => (
            <View>
              <Image
                source={{ uri: params.avatatar_url }}
                style={styles.image}
              />
              <Text style={styles.title}>{params.name}</Text>
            </View>
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  spinner: {
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
