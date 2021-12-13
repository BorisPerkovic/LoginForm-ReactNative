import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

interface CardProps {
  repoName: string;
  title: string;
  description: string;
  languages: string;
  viewRepository: () => void;
}

export const UsersRepositoriesCard: FunctionComponent<CardProps> = ({
  repoName,
  title,
  description,
  languages,
  viewRepository,
}) => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.repoTitle}>{repoName}</Text>
      <Text style={styles.details}>Description: {description}</Text>
      <Text style={styles.details}>Languages: {languages}</Text>
      <View style={styles.button}>
        <Button
          title={title.toUpperCase()}
          color={Colors.primaryColor}
          onPress={viewRepository}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  repoTitle: {
    textAlign: 'center',
    fontSize: 26,
    marginVertical: 15,
  },
  details: {
    fontSize: 14,
    marginBottom: 15,
  },
  button: {},
});
