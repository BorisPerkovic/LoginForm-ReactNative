import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  image: string;
}

export const AccountImage: FunctionComponent<Props> = ({ image }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
