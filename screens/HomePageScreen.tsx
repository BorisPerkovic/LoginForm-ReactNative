import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type HomePageNavigationType = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;

import Colors from '../constants/colors';

export const HomePageScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'HomePage'>>();
  const navigation = useNavigation<HomePageNavigationType>();
  return (
    <View style={styles.container}>
      <Text>HomePageScreen</Text>
      <Text style={{ marginVertical: 10 }}>PARAMS: {params.userId}</Text>
      <Button
        title="Go Back"
        color={Colors.primaryColor}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
