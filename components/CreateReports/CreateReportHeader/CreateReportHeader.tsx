import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../../constants/colors';

export const CreateReportHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.steps}>
        <Text style={styles.stepstext}>1</Text>
      </View>
      <View style={styles.stripe}></View>
      <View style={styles.steps}>
        <Text style={styles.stepstext}>2</Text>
      </View>
      <View style={styles.stripe}></View>
      <View style={styles.steps}>
        <Text style={styles.stepstext}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  steps: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepstext: {
    fontSize: 18,
    color: Colors.primaryColor,
  },
  stripe: {
    height: 5,
    width: 80,
    backgroundColor: Colors.primaryColor,
  },
});
