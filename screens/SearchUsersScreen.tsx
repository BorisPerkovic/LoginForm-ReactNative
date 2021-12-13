import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomMenu } from '../components/Menu/Menu';
import { useNavigation } from '@react-navigation/native';
import { AccountBottomTabsParamList } from '../navigation/Bottomtabs/AccountBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchUsersForm } from '../components/SearchUsers/SearchUsersForm';
import { SearchUsersList } from '../components/SearchUsers/SearchUsersList';

type AccountPageNavigationType = StackNavigationProp<
  AccountBottomTabsParamList,
  'Search'
>;

export const SearchUsersScreen = () => {
  const navigation = useNavigation<AccountPageNavigationType>();
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.containerContent}>
        <SearchUsersForm />
      </View>
      <SearchUsersList
        changeParam={() => {
          return 'Borisss';
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    height: 150,
    padding: 20,
  },
  searchContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
