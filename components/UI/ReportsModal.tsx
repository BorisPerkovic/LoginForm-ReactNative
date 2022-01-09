import React, { FunctionComponent } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

interface ModalProps {
  candidateName: string;
  companyName: string;
  interviewDate: string;
  phase: string;
  status: string;
  notes: string;
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

export const ReportsModal: FunctionComponent<ModalProps> = ({
  candidateName,
  companyName,
  interviewDate,
  phase,
  status,
  notes,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <Modal visible={modalOpen} animationType="slide">
      <ScrollView style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>{candidateName}</Text>
          <Ionicons
            size={30}
            color={Colors.primaryColor}
            name="close-circle-outline"
            onPress={() => setModalOpen(false)}
          />
        </View>
        <View style={styles.reportDetails}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.text}>{companyName}</Text>
          <Text style={styles.title}>Interview Date</Text>
          <Text style={styles.text}>{interviewDate}</Text>
          <Text style={styles.title}>Phase</Text>
          <Text style={styles.text}>{phase}</Text>
          <Text style={styles.title}>Status</Text>
          <Text style={styles.text}>{status}</Text>
        </View>
        <View>
          <Text style={styles.title}>Notes</Text>
          <Text style={styles.text}>{notes}</Text>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#c7c7c7',
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '600',
    marginVertical: 10,
  },
  reportDetails: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});
