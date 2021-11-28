import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AccountBottomTabsParamList } from '../navigation/Bottomtabs/AccountBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { Menu } from '../components/Menu';

type EditAccountPageNavigationType = StackNavigationProp<
  AccountBottomTabsParamList,
  'Edit'
>;

export const EditAccount = () => {
  const navigation = useNavigation<EditAccountPageNavigationType>();
  return (
    <View style={styles.container}>
      <Menu
        onPressDots={() => {}}
        onPresMenu={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <View style={styles.container}>
        <Text>This is Edit Account Screen</Text>
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
