import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AccountBottomTabsParamList } from '../navigation/Bottomtabs/AccountBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomMenu } from '../components/Menu/Menu';

type EditAccountPageNavigationType = StackNavigationProp<
  AccountBottomTabsParamList,
  'Edit'
>;

export const EditAccount = () => {
  const navigation = useNavigation<EditAccountPageNavigationType>();
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
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
