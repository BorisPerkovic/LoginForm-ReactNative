import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Colors from '../constants/colors';
import { Logo } from '../components/LoginForm/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Menu } from '../components/LoginForm/Menu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { LoginFormValidation } from '../utils/LoginFormValidation';
import { LoginButton } from '../components/LoginForm/LoginButton';
import { CreateAccount } from '../components/LoginForm/CreateAccount';
import { CustomInput } from '../components/LoginForm/CustomInput';
import { ErrorMessage } from '../components/LoginForm/ErrorMessage';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type LogInNavigationType = StackNavigationProp<RootStackParamList, 'LogIn'>;

export const LoginFormScreen = () => {
  const navigation = useNavigation<LogInNavigationType>();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  /* form validation function */
  const validForm = () => {
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
  };

  useEffect(() => {
    const identifier = setInterval(() => validForm(), 500);

    return () => clearInterval(identifier);
  }, [enteredEmail, enteredPassword]);

  return (
    <ScrollView style={styles.formContainer}>
      <CustomStatusBar />

      {/* Menu */}
      <Menu
        onPressIcon={() => {
          console.log('icon pressed');
        }}
      />
      <Logo />

      {/* Login Form */}
      <LoginForm>
        <CustomInput
          title="Email"
          type="text"
          onChangeText={value => setEnteredEmail(value)}
        />
        {!emailIsValid && (
          <ErrorMessage>Please, provide valid email address</ErrorMessage>
        )}
        <CustomInput
          title="Password"
          type="password"
          onChangeText={value => setEnteredPassword(value)}
        />
        {!passwordIsValid && (
          <ErrorMessage>Please, provide valid password</ErrorMessage>
        )}
      </LoginForm>

      {/* Delete Grid */}
      <LoginButton
        title="Login"
        disabled={isButtonDisabled}
        onPress={() => {
          /*  navigation.dispatch(
            StackActions.replace('HomePage', { userId: '3' }),
          ); */
          navigation.navigate('HomePage', { userId: '5' });
        }}>
        {/* Pass spacing from above always. Decide if you want to use flex or have fixed spacing based on context */}
      </LoginButton>
      <CreateAccount />
    </ScrollView>
  );
};
/* Styles for log in Form */
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
});
