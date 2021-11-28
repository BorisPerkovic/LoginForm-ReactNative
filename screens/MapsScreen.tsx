import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AppBottomTabsParamList } from '../navigation/Bottomtabs/AppBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { Menu } from '../components/Menu';

type MapsAccountPageNavigationType = StackNavigationProp<
  AppBottomTabsParamList,
  'Maps'
>;

export const MapsScreen = () => {
  const navigation = useNavigation<MapsAccountPageNavigationType>();
  return (
    <View style={styles.container}>
      <Menu
        onPressDots={() => {}}
        onPresMenu={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <View style={styles.container}>
        <Text>This is Maps Screen</Text>
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
