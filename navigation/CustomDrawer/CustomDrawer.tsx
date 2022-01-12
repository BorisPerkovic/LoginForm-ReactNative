import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../features/logInSlice';

import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomDrawerProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

export const CustomDrawer: FunctionComponent<CustomDrawerProps> = ({
  props,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user.entities.user);

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
            uri: user.avatar,
          }}
          style={styles.image}
        />
        <Text style={styles.welcomeMessage}>Welcome, {user.name}</Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          dispatch(logOut());
        }}>
        <Ionicons
          name="log-out-outline"
          size={26}
          color={Colors.primaryColor}
        />
        <Text style={{ marginLeft: 25 }}>Log Out</Text>
      </TouchableOpacity>
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
  welcomeMessage: {
    marginVertical: 10,
    fontSize: 18,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});
