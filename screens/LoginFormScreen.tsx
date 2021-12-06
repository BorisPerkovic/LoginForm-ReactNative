import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/colors';
import { Logo } from '../components/LoginForm/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation<LogInNavigationType>();

  /* form validation function */
  const onSubmit = (data: { email: string; password: string }) => {
    //navigation.navigate('HomePage');
  };

  console.log('rendered from FORM');

  return (
    <ScrollView style={styles.formContainer}>
      <CustomStatusBar />

      {/* Menu */}
      <CustomMenu onPressDots={() => {}} />

      <Logo />

      {/* Login Form using react-hook-form */}
      <LoginForm>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
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
        {errors.email && (
          <ErrorMessage>Please provide valid email address</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              title={t('password')}
              type="password"
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <ErrorMessage>Please provide valid password</ErrorMessage>
        )}
      </LoginForm>

      {/* Delete Grid */}
      <LoginButton
        title={t('Login')}
        disabled={false}
        onPress={handleSubmit(onSubmit)}
      />
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
