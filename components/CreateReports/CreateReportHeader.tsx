import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import { labels, customStyles } from '../../constants/steps';

interface SteIndicatorProps {
  position: number;
}

export const CreateReportHeader: FunctionComponent<SteIndicatorProps> = ({
  position,
}) => {
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={position}
        labels={labels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
  },
});
