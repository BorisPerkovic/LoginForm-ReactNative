import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IconButton, Menu } from 'react-native-paper';

import Colors from '../../constants/colors';

interface MenuProps {
  onPressDots: () => void;
}

export const CustomMenu: FunctionComponent<MenuProps> = ({ onPressDots }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon="menu"
          color={Colors.textColor}
          size={26}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="dots-horizontal"
              size={31}
              color={Colors.textColor}
              onPress={openMenu}
            />
          }
          style={styles.menu}>
          <Menu.Item
            onPress={() => {}}
            title="English"
            icon={() => (
              <Image
                source={require('./images/english.svg')}
                style={{ height: 20, width: 30 }}
              />
            )}
          />
          <Menu.Item
            onPress={() => {}}
            title="Deutschland"
            icon={() => (
              <Image
                source={require('./images/germany.svg')}
                style={{ height: 20, width: 30 }}
              />
            )}
          />
        </Menu>
      </View>
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
  menu: {
    position: 'absolute',
    top: 45,
  },
});
