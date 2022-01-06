import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';
import { ReportsModal } from './ReportsModal';

interface CardProps {
  candidateName: string;
  companyName: string;
  interviewDate: string;
  status: string;
  title: string;
  phase: string;
  notes: string;
}

export const CandidateReportsCard: FunctionComponent<CardProps> = ({
  candidateName,
  companyName,
  interviewDate,
  status,
  title,
  phase,
  notes,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.containerCard}>
      <ReportsModal
        candidateName={candidateName}
        companyName={companyName}
        interviewDate={interviewDate}
        phase={phase}
        status={status}
        notes={notes}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />

      <Text style={styles.repoTitle}>{companyName}</Text>
      <Text style={styles.details}>Interview Date: {interviewDate}</Text>
      <Text style={styles.details}>Status: {status}</Text>
      <View>
        <Button
          title={title.toUpperCase()}
          color={Colors.primaryColor}
          onPress={() => setModalOpen(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  repoTitle: {
    textAlign: 'center',
    fontSize: 26,
    marginVertical: 15,
  },
  details: {
    fontSize: 14,
    marginBottom: 15,
  },
});
