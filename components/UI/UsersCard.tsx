import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import Colors from '../../constants/colors';

interface CardProps {
  name: string;
  imageUrl: string;
  email: string;
  title: string;
  viewRepositories: () => void;
}

export const UsersCard: FunctionComponent<CardProps> = ({
  name,
  imageUrl,
  email,
  title,
  viewRepositories,
}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.details}>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title={title.toUpperCase()}
          color={Colors.primaryColor}
          onPress={viewRepositories}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    overflow: 'hidden',
  },
  button: {},
});
