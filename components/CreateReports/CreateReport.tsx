import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createReportThunk } from '../../features/createReportSlice';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { CreateReportHeader } from './CreateReportHeader';
import { SelectCandidate } from './SelectCandidate';
import { SelectCompany } from './SelectCompany';
import { CreateReportForm } from './CreateReportForm';
import { SaveReport } from './SaveReport';
import { CreateReportSuccess } from './CreateReportSuccess';

import Colors from '../../constants/colors';

export const CreateReport = () => {
  const [position, setPosition] = useState(0);
  const [newReport, setNewReport] = useState({
    candidateId: null,
    candidateName: null,
    company_img: null,
    companyId: null,
    companyName: null,
    interviewDate: null,
    phase: null,
    status: null,
    note: null,
  });
  const dispatch = useDispatch();
  const reports = useSelector((state: RootStateOrAny) => state.reports);

  const renderSwitch = () => {
    switch (position) {
      case 0:
        return (
          <SelectCandidate
            position={position}
            candidates={reports.candidates}
            newReport={newReport}
            setPosition={setPosition}
            setNewReport={setNewReport}
          />
        );
      case 1:
        return (
          <SelectCompany
            position={position}
            companies={reports.companies}
            newReport={newReport}
            setPosition={setPosition}
            setNewReport={setNewReport}
          />
        );
      case 2:
        return (
          <CreateReportForm
            position={position}
            newReport={newReport}
            setPosition={setPosition}
            setNewReport={setNewReport}
          />
        );
      case 3:
        return (
          <SaveReport
            position={position}
            newReport={newReport}
            setPosition={setPosition}
          />
        );
      case 4:
        return (
          <CreateReportSuccess position={position} setPosition={setPosition} />
        );
    }
  };

  useEffect(() => {
    dispatch(createReportThunk());
  }, []);

  return (
    <View style={styles.container}>
      <CreateReportHeader position={position} />
      <View style={styles.containerContent}>
        {reports.loading === 'pending' && (
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        )}
        {reports.loading === 'failed' && <Text>Something went wrong</Text>}
        {reports.loading === 'succeeded' && renderSwitch()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});
