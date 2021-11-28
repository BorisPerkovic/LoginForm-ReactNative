import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ScreenDrawer1 = () => {
  return (
    <View style={styles.container}>
      <Text>This is Screen Drawer 1</Text>
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
