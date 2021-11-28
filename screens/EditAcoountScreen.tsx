import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const EditAccount = () => {
  return (
    <View style={styles.container}>
      <Text>This is Edit Account Screen</Text>
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
