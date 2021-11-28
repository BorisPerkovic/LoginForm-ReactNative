import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ScreenDrawer2 = () => {
  return (
    <View style={styles.container}>
      <Text>This is Screen Drawer 2</Text>
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
