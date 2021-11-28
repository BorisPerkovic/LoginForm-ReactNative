import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import Colors from '../constants/colors';

interface MenuProps {
  onPressDots: () => void;
}

export const Menu: FunctionComponent<MenuProps> = ({ onPressDots }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconButton
        icon="menu"
        color={Colors.textColor}
        size={26}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <IconButton
        icon="dots-horizontal"
        color={Colors.textColor}
        size={26}
        onPress={onPressDots}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
});
