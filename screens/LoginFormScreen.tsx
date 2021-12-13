import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../constants/colors';
import { Logo } from '../components/LoginForm/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { CustomMenu } from '../components/Menu/Menu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoginButton } from '../components/LoginForm/LoginButton';
import { CreateAccount } from '../components/LoginForm/CreateAccount';
import { CustomInput } from '../components/LoginForm/CustomInput';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/Stacks/AppStack';
import { useForm, Controller } from 'react-hook-form';

type LogInNavigationType = StackNavigationProp<AppStackParamList, 'Login'>;
type LogInFormTypes = {
  email: string;
  password: string;
};

export const LoginFormScreen = () => {
  const { t, i18n } = useTranslation('login');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation<LogInNavigationType>();

  /* form validation function */
  const onSubmit = (data: LogInFormTypes) => {
    navigation.navigate('HomePage');
  };

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
            required: {
              value: true,
              message: 'Email address is required',
            },
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please, provide valid email address',
            },
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
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
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
        {errors.password && <ErrorMessage message={errors.password.message} />}
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
