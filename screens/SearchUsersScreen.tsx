import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomMenu } from '../components/Menu/Menu';
import { SearchUsersForm } from '../components/SearchUsers/SearchUsersFrom';

export const SearchUsersScreen = () => {
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <SearchUsersForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    padding: 20,
  },
});
