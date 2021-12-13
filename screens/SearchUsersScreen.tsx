import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomMenu } from '../components/Menu/Menu';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AccountBottomTabsParamList } from '../navigation/Bottomtabs/AccountBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchUsersForm } from '../components/SearchUsers/SearchUsersForm';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    height: 100,
    padding: 15,
  },
});
