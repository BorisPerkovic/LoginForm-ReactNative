import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStackParamList } from '../../navigation/Stacks/AppStack';

import Colors from '../../constants/colors';

interface CreateReportSuccessProps {
  position: number;
  setPosition: (param: number) => void;
}

type HomePageNavigationType = StackNavigationProp<
  AppStackParamList,
  'HomePage'
>;

export const CreateReportSuccess: FunctionComponent<CreateReportSuccessProps> =
  ({ setPosition }) => {
    const navigation = useNavigation<HomePageNavigationType>();
    return (
      <View>
        <View style={styles.successContainer}>
          <Ionicons name="checkmark" size={65} color="green" />
          <Text style={styles.successText}>Success!</Text>
          <Text style={styles.successText}>
            You Have Successsfully Created Report
          </Text>
        </View>
        <View style={styles.successButtons}>
          <Button
            title="Create New Report"
            onPress={() => {
              setPosition(0);
            }}
            color={Colors.primaryColor}
          />
          <Button
            title="Back To Home"
            onPress={() => {
              navigation.navigate('HomePage');
              setPosition(0);
            }}
            color={Colors.primaryColor}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 5,
  },
  successButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
