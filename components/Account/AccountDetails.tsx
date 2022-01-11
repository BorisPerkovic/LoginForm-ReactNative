import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  lastname: string;
  age: number;
  email: string;
}

export const AccountDetails: FunctionComponent<Props> = ({
  name,
  lastname,
  age,
  email,
}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.info}>
        Name and Lastname:{' '}
        <Text style={styles.infoBold}>
          {name} {lastname}
        </Text>
      </Text>
      <Text style={styles.info}>
        Age: <Text style={styles.infoBold}>{age}</Text>
      </Text>
      <Text style={styles.info}>
        Email: <Text style={styles.infoBold}>{email}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
  infoBold: {
    fontWeight: '600',
    color: 'black',
  },
});
