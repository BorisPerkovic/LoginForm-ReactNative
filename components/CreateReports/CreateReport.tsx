import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';
import { createReportThunk } from '../../features/createReportSlice';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { CreateReportHeader } from './CreateReportHeader/CreateReportHeader';

import Colors from '../../constants/colors';

export const CreateReport = () => {
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  const reports = useSelector((state: RootStateOrAny) => state.reports);

  useEffect(() => {
    dispatch(createReportThunk());
  }, []);

  if (reports.loading === 'pending') {
    return <ActivityIndicator size="large" color={Colors.primaryColor} />;
  }

  if (reports.loading === 'failed') {
    return <Text>Something went wrong</Text>;
  }

  return (
    <View>
      <CreateReportHeader position={position} />
    </View>
  );
};

const styles = StyleSheet.create({});
