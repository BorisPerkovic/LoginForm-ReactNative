import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReportsBottomTabsParamList } from '../navigation/Bottomtabs/ReportsBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomMenu } from '../components/Menu/Menu';
import { ReportsList } from '../components/Reports/ReportsList';

type CompanyPageNavigationType = StackNavigationProp<
  ReportsBottomTabsParamList,
  'Reports'
>;

export const ReportsScreen = () => {
  const navigation = useNavigation<CompanyPageNavigationType>();
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <ReportsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
