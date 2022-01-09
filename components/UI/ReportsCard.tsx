import React, { FunctionComponent, useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { ReportsModal } from './ReportsModal';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

interface CardProps {
  candidateName: string;
  companyName: string;
  companyImage: string;
  interviewDate: string;
  status: string;
  phase: string;
  notes: string;
}

export const ReportsCard: FunctionComponent<CardProps> = ({
  candidateName,
  companyName,
  companyImage,
  interviewDate,
  status,
  phase,
  notes,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
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
      <View style={styles.cardHeader}>
        <ImageBackground
          source={{
            uri: companyImage,
          }}
          style={styles.bgImage}>
          <View style={styles.cardDetails}>
            <View>
              <Text style={styles.text}>Candidate</Text>
              <Text style={styles.text}>{candidateName}</Text>
            </View>
            <View>
              <Text style={styles.text}>Interview Date</Text>
              <Text style={styles.text}>25.02.2021.</Text>
            </View>
            <View>
              <Ionicons
                name="remove-circle-outline"
                size={22}
                color={Colors.secondaryColor}
              />
              <Ionicons
                name="eye-outline"
                size={22}
                color={Colors.secondaryColor}
                onPress={() => setModalOpen(true)}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardHeader: {
    height: 200,
    marginVertical: 10,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bgImage: {
    justifyContent: 'flex-end',
    width: '100%',
    height: 200,
  },
  cardDetails: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  text: {
    color: Colors.secondaryColor,
    fontSize: 16,
  },
});
