import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/colors';
import { Logo } from '../components/LoginForm/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { LanguageChangeModal } from '../components/LanguageChangeModal';
import { CustomMenu } from '../components/Menu/Menu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { LoginFormValidation } from '../utils/LoginFormValidation';
import { LoginButton } from '../components/LoginForm/LoginButton';
import { CreateAccount } from '../components/LoginForm/CreateAccount';
import { CustomInput } from '../components/LoginForm/CustomInput';
import { ErrorMessage } from '../components/LoginForm/ErrorMessage';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useForm, Controller } from 'react-hook-form';

type LogInNavigationType = StackNavigationProp<AppStackParamList, 'Login'>;

export const LoginFormScreen = () => {
  const { t, i18n } = useTranslation('login');
  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation<LogInNavigationType>();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  /* form validation function */
  const onSubmit = (data: Object) => {
    console.log('data', data);

    /* const validFormInstance = new LoginFormValidation();
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
    } */
  };

  /* useEffect(() => {
    const identifier = setInterval(() => validForm(), 500);

    return () => clearInterval(identifier);
  }, [enteredEmail, enteredPassword]); */

  return (
    <ScrollView style={styles.formContainer}>
      <CustomStatusBar />

      {/* Menu */}
      <CustomMenu
        onPressDots={() => {
          setModalVisible(!modalVisible);
        }}
      />

      {modalVisible && (
        <LanguageChangeModal onLanguageChange={setModalVisible} />
      )}

      <Logo />

      {/* Login Form */}
      <LoginForm>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              title={t('email')}
              type="text"
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              title={t('password')}
              type="password"
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="pasword"
        />
        {/*  <CustomInput
          title={t('email')}
          type="text"
          onChangeText={value => setEnteredEmail(value)}
        />
        {!emailIsValid && <ErrorMessage>{t('email_error')}</ErrorMessage>}
        <CustomInput
          title={t('password')}
          type="password"
          onChangeText={value => setEnteredPassword(value)}
        />
        {!passwordIsValid && <ErrorMessage>{t('password_error')}</ErrorMessage>} */}
      </LoginForm>

      {/* Delete Grid */}
      <LoginButton
        title={t('Login')}
        disabled={false}
        onPress={() => {
          /*  navigation.dispatch(
            StackActions.replace('HomePage', { userId: '3' }),
          ); */
          handleSubmit(onSubmit)();
          //navigation.navigate('HomePage');
        }}></LoginButton>
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
