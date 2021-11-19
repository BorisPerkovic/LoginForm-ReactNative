import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

import Colors from '../constants/colors';
import { DefaultText } from '../components/DefaultText';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { ElipsisIcon } from '../components/ElipsisIcon';

export const LoginFormScreen = () => {
  const onPress = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.formContainer}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={styles.svg}>
        <ElipsisIcon width={50} height={30} color="#b0b5c2" />
      </View>
      <View style={styles.imageContent}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.freeiconspng.com/uploads/white-strategy-icon-33.png',
          }}
        />
        <DefaultText textStyle={styles.title}>
          my
          <DefaultText textStyle={{ fontWeight: 'bold', color: '#E9E9EB' }}>
            goals
          </DefaultText>
        </DefaultText>
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
        <CustomButton
          title="Log In"
          style={styles.button}
          buttonTextStyle={styles.buttonText}
          onPress={onPress}
        />
      </View>
      <View style={styles.account}>
        <DefaultText>Don't have an account?</DefaultText>
        <DefaultText
          textStyle={{ color: '#E9E9EB', fontWeight: 'bold', marginTop: 10 }}>
          Create an Account.
        </DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  imageContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: '#E9E9EB',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 35,
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    backgroundColor: Colors.buttonColor,
    height: 44,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  svg: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
