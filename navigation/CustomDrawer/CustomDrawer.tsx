import React, { FunctionComponent } from 'react';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

interface CustomDrawerProps {
  navigation: DrawerContentComponentProps<DrawerContentOptions>;
}

export const CustomDrawer: FunctionComponent<CustomDrawerProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          source={{
            uri: 'https://www.budgetbytes.com/wp-content/uploads/2012/03/Chicken-Yakisoba-noodles-fork-391x293.jpg',
          }}
          style={styles.image}
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...navigation} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
