import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Map Screen!</Text>
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
