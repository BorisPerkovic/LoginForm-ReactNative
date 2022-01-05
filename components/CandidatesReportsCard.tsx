import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

interface CardProps {
  companyName: string;
  interviewDate: string;
  status: string;
  title: string;
  viewReport: () => void;
}

export const CandidateReportsCard: FunctionComponent<CardProps> = ({
  companyName,
  interviewDate,
  status,
  title,
  viewReport,
}) => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.repoTitle}>{companyName}</Text>
      <Text style={styles.details}>Interview Date: {interviewDate}</Text>
      <Text style={styles.details}>Status: {status}</Text>
      <View style={styles.button}>
        <Button
          title={title.toUpperCase()}
          color={Colors.primaryColor}
          onPress={viewReport}
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
  button: {},
});
