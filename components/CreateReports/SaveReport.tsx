import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useCreateReportMutation } from '../../services/reportsAPI';

import Colors from '../../constants/colors';

interface SaveReportProps {
  position: number;
  newReport: any;
  setPosition: (param: number) => void;
}

export const SaveReport: FunctionComponent<SaveReportProps> = ({
  position,
  newReport,
  setPosition,
}) => {
  const [createReport] = useCreateReportMutation();
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={() => setPosition(position - 1)}
          color={Colors.primaryColor}
        />
        <Button
          title="Save"
          onPress={() => {
            createReport(newReport);
            setPosition(position + 1);
          }}
          color={Colors.primaryColor}
        />
      </View>
      <View style={styles.saveReport}>
        <Text style={styles.saveRreportText}>Report details: </Text>
        <Text style={styles.saveRreportText}>
          Candidate: {newReport.candidateName}
        </Text>
        <Text style={styles.saveRreportText}>
          Company: {newReport.companyName}
        </Text>
        <Text style={styles.saveRreportText}>
          Date: {newReport.interviewDate}
        </Text>
        <Text style={styles.saveRreportText}>Status: {newReport.status}</Text>
        <Text style={styles.saveRreportText}>Phase: {newReport.phase}</Text>
        <Text style={styles.saveRreportText}>Notes: {newReport.note}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  saveReport: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveRreportText: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 5,
  },
});
