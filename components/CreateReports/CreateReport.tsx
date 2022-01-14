import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createReportThunk } from '../../features/createReportSlice';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { CreateReportHeader } from './CreateReportHeader/CreateReportHeader';

import Colors from '../../constants/colors';

export const CreateReport = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state: RootStateOrAny) => state.reports);

  useEffect(() => {
    dispatch(createReportThunk());
  }, []);

  return (
    <View>
      {reports.loading === 'pending' && (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {reports.loading === 'failed' && <Text>Something went wrong</Text>}
      {reports.loading === 'succeeded' && <CreateReportHeader />}
    </View>
  );
};

const styles = StyleSheet.create({});
