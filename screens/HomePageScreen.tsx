import React, { useState, useEffect, useCallback } from 'react';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useTranslation } from 'react-i18next';
import { CustomMenu } from '../components/Menu/Menu';
import { UsersCard } from '../components/UsersCard';
import { useFetchAllRepositories } from '../hooks/useFetch';

import Colors from '../constants/colors';

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const HomePageScreen = () => {
  /* const [requestState, setRequestState] = useState<'loading' | 'error' | 'initial' | 'resolved'>({status: 'initial', pa}); */

  const requestState = useFetchAllRepositories();
  const { t, i18n } = useTranslation('home');
  const { params } = useRoute<RouteProp<AppStackParamList, 'HomePage'>>();
  const navigation = useNavigation<HomePageNavigationType>();

  console.log('request', requestState.status);

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.containerContent}>
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
                viewRepositories={() => {}}
              />
            )}
            keyExtractor={item => item.id.toString()}
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
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
