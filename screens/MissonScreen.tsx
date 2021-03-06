import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReportsBottomTabsParamList } from '../navigation/Bottomtabs/ReportsBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomMenu } from '../components/Menu/Menu';

type MissionPageNavigationType = StackNavigationProp<
  ReportsBottomTabsParamList,
  'Mission'
>;

export const Mission = () => {
  const navigation = useNavigation<MissionPageNavigationType>();
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <Text>This is Mission Screen!</Text>
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
