import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from '../components/Menu';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AccountBottomTabsParamList } from '../navigation/Bottomtabs/AccountBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';

type AccountPageNavigationType = StackNavigationProp<
  AccountBottomTabsParamList,
  'Account'
>;

export const Account = () => {
  const navigation = useNavigation<AccountPageNavigationType>();
  return (
    <View style={styles.container}>
      <Menu
        onPressDots={() => {}}
        onPresMenu={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <View style={styles.container}>
        <Text>This is Account Screen</Text>
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
