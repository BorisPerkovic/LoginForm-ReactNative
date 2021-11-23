import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

export const Logo = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.freeiconspng.com/uploads/white-strategy-icon-33.png',
        }}
      />
      <Text style={styles.title}>
        my
        <Text style={styles.spanTitle}>goals</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (Dimensions.get('screen').width / 10) * 3,
    height: (Dimensions.get('screen').width / 10) * 3,
  },
  title: {
    fontSize: Dimensions.get('window').width >= 350 ? 30 : 25,
    color: Colors.secondaryColor,
    marginBottom: Dimensions.get('window').width >= 350 ? 20 : 10,
  },
  spanTitle: {
    fontWeight: 'bold',
    color: Colors.secondaryColor,
  },
});
