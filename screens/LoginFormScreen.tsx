import React, { useState, useEffect, useCallback } from 'react';
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
import { LoginFormValidation } from '../utils/LoginFormValidation';

export const LoginFormScreen = () => {
  /* states */
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  /* form validation */
  const validForm = useCallback(() => {
    const validFormInstance = new LoginFormValidation();
    const validEmail = validFormInstance.isEmailValid(
      enteredEmail,
      setEmailIsValid,
    );
    const validPassword = validFormInstance.isPasswordValid(
      enteredPassword,
      setPasswordIsValid,
    );
    if (validEmail && validPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [enteredEmail, enteredPassword]);

  /* effect after form */
  useEffect(() => {
    const identifier = setInterval(() => {
      validForm();
    }, 500);

    return () => clearInterval(identifier);
  }, [enteredEmail, enteredPassword]);

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
        {!emailIsValid && (
          <DefaultText textStyle={styles.errorMessage}>
            Please, provide valid email address.
          </DefaultText>
        )}
        <DefaultText textStyle={styles.inputLabel}>Password</DefaultText>
        <CustomInput
          style={styles.input}
          type={true}
          value={enteredPassword}
          onChangeText={value => setEnteredPassword(value)}
        />
        {!passwordIsValid && (
          <DefaultText textStyle={styles.errorMessage}>
            Please, provide your password.
          </DefaultText>
        )}
      </View>
      {/* end topContainer */}

      {/* bottomContainer -  forgotPass, button, account text */}
      <View style={styles.bottomContainer}>
        <DefaultText>Forgot password?</DefaultText>
        <CustomButton
          title="Log In"
          style={!isButtonDisabled ? styles.button : styles.buttonDisabled}
          buttonTextStyle={styles.buttonText}
          onPress={() => {
            Alert.alert('Succes', 'log in passed');
          }}
          disabled={isButtonDisabled}
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
  errorMessage: {
    color: 'red',
    fontSize: 14,
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
    marginVertical: Dimensions.get('window').width >= 350 ? 50 : 20,
  },
  buttonDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    backgroundColor: Colors.buttonColor,
    height: Dimensions.get('window').width >= 350 ? 50 : 35,
    marginVertical: Dimensions.get('window').width >= 350 ? 50 : 20,
    opacity: 0.5,
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
