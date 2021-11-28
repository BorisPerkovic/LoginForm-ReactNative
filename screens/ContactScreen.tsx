import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Menu } from '../components/Menu';

export const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Menu
        onPressDots={() => {}}
        onPresMenu={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <View style={styles.container}>
        <Text>This is Contact Screen!</Text>
      </View>
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
