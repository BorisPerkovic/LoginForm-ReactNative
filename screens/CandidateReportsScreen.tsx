import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { CustomMenu } from '../components/Menu/Menu';
import { CandidateReportsList } from '../components/CandidateReport/CandidateReportsList';

export const CandidateReportsScreen = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'CandReports'>>();

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <CandidateReportsList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
