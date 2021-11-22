import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import Colors from '../constants/colors';
import { DefaultText } from '../components/DefaultText';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { ElipsisIcon } from '../components/ElipsisIcon';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { LoginFormValidaiton } from '../utils/LoginFormValidation';

export const LoginFormScreen = () => {
  /* sates */
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  /* on submit Log in button function with validation */
  const onFormSubmit = () => {
    const validForm = new LoginFormValidaiton(enteredEmail, enteredPassword);
    if (!validForm.isFormValid()) {
      return;
    }
    Alert.alert('Sucess', 'Log in from has passed');
  };

  return (
    <ScrollView style={styles.formContainer}>
      <CustomStatusBar bgColor={Colors.primaryColor} />

      {/* svg container */}
      <View style={styles.svg}>
        <Pressable
          onPress={() => {
            console.log('icon Pressed');
          }}>
          <ElipsisIcon
            width={40}
            height={30}
            color={Colors.textColor}
            viewBox="5 0 50 50"
          />
        </Pressable>
      </View>
      {/* end svg container */}

      {/* image Container - image, title */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.freeiconspng.com/uploads/white-strategy-icon-33.png',
          }}
        />
        <DefaultText textStyle={styles.title}>
          my
          <DefaultText textStyle={styles.spanTitle}>goals</DefaultText>
        </DefaultText>
      </View>
      {/* end image Container */}

      {/* inputContainer - labels and inputs */}
      <View style={styles.inputContainer}>
        <DefaultText textStyle={styles.inputLabel}>Email</DefaultText>
        <CustomInput
          style={styles.input}
          type={false}
          value={enteredEmail}
          onChangeText={value => setEnteredEmail(value)}
        />
        <DefaultText textStyle={styles.inputLabel}>Password</DefaultText>
        <CustomInput
          style={styles.input}
          type={true}
          value={enteredPassword}
          onChangeText={value => setEnteredPassword(value)}
        />
      </View>
      {/* end topContainer */}

      {/* bottomContainer -  forgotPass, button, account text */}
      <View style={styles.bottomContainer}>
        <DefaultText>Forgot password?</DefaultText>
        <CustomButton
          title="Log In"
          style={styles.button}
          buttonTextStyle={styles.buttonText}
          onPress={onFormSubmit}
        />
        <DefaultText>Don't have an account?</DefaultText>
        <DefaultText textStyle={styles.createAccount}>
          Create an Account.
        </DefaultText>
      </View>
      {/* end bottomContainer */}
    </ScrollView>
  );
};

/* Styles for log in Form */
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  svg: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
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
  inputContainer: {
    paddingHorizontal: 35,
  },
  inputLabel: {
    fontSize: Dimensions.get('window').width >= 350 ? 15 : 12,
    marginTop: Dimensions.get('window').width >= 350 ? 30 : 20,
  },
  input: {
    height: Dimensions.get('window').width >= 350 ? 40 : 35,
    borderBottomColor: Colors.inputBorderColor,
    borderBottomWidth: Dimensions.get('window').width >= 350 ? 3 : 2,
    color: 'white',
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 13,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Dimensions.get('window').width >= 350 ? 20 : 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    backgroundColor: Colors.buttonColor,
    height: Dimensions.get('window').width >= 350 ? 50 : 35,
    marginVertical: Dimensions.get('window').width >= 350 ? 60 : 20,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 15,
    color: 'black',
  },
  createAccount: {
    color: Colors.secondaryColor,
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').width >= 350 ? 10 : 5,
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 15,
  },
});
