import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReportsBottomTabsParamList } from '../navigation/Bottomtabs/ReportsBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreateReport } from '../components/CreateReports/CreateReport';
import { CustomMenu } from '../components/Menu/Menu';

type PortolioPageNavigationType = StackNavigationProp<
  ReportsBottomTabsParamList,
  'Create'
>;

export const CreateReportScreen = () => {
  const navigation = useNavigation<PortolioPageNavigationType>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <CreateReport />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
