import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

import { DefaultText } from '../components/DefaultText';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

export const LoginFormScreen = () => {
  const onPress = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.imageContent}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.iconpacks.net/icons/1/free-target-icon-777-thumb.png',
          }}
        />
        <DefaultText textStyle={styles.title}>mygoals</DefaultText>
      </View>
      <View style={styles.inputContainer}>
        <DefaultText textStyle={styles.inputLabel}>Email</DefaultText>
        <CustomInput type={false} onChangeText={() => {}} />
        <DefaultText textStyle={styles.inputLabel}>Password</DefaultText>
        <CustomInput type={true} onChangeText={() => {}} />
      </View>
      <View style={styles.forgotPass}>
        <DefaultText>Forgot password?</DefaultText>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Log In" onPress={onPress} />
      </View>
      <View style={styles.account}>
        <DefaultText>Don't have an account?</DefaultText>
        <DefaultText textStyle={{ color: 'white' }}>
          Create an Account
        </DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#2c2e2c',
  },
  imageContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 30,
  },
  inputLabel: {
    fontSize: 15,
    marginTop: 30,
  },
  forgotPass: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  account: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
