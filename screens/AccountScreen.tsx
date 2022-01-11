import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { CustomMenu } from '../components/Menu/Menu';
import { AccountImage } from '../components/Account/AccountImage';
import { AccountDetails } from '../components/Account/AccountDetails';
import { AccountCarousel } from '../components/Account/AccountCarousel';

export const AccountScreen = () => {
  const user = useSelector((state: RootStateOrAny) => state.user.entities.user);
  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
      <View style={styles.container}>
        <AccountImage image={user.avatar} />
        <AccountDetails
          name={user.name}
          lastname={user.surname}
          age={user.age}
          email={user.email}
        />
        <AccountCarousel technologies={user.technologies} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
