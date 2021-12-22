import React, { FunctionComponent } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Button } from 'react-native';
import { IconButton } from 'react-native-paper';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth';

import Colors from '../../constants/colors';

interface CustomDrawerProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

export const CustomDrawer: FunctionComponent<CustomDrawerProps> = ({
  props,
}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <IconButton
          icon="menu"
          color={Colors.primaryColor}
          size={26}
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
      <View style={styles.containerContent}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          style={styles.image}
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Button
          title="logout"
          onPress={() => {
            dispatch(logOut({ name: '', password: '', isLogedIn: false }));
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerContent: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 60,
  },
});
