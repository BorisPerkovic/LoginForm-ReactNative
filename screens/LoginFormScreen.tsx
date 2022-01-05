import React, { useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchUser } from '../features/authenticationSlice';
import { Logo } from '../components/LoginForm/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { LogInFormMenu } from '../components/Menu/LoginFormMenu';
import { CustomStatusBar } from '../components/CustomStatusBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoginButton } from '../components/LoginForm/LoginButton';
import { CreateAccount } from '../components/LoginForm/CreateAccount';
import { CustomInput } from '../components/LoginForm/CustomInput';
import { useForm, Controller } from 'react-hook-form';

import Colors from '../constants/colors';

type LogInFormTypes = {
  email: string;
  password: string;
};

export const LoginFormScreen = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: RootStateOrAny) => state.user);
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

  /* form validation function */
  const onSubmit = async (data: LogInFormTypes) => {
    dispatch(fetchUser(data));
  };

  useEffect(() => {
    if (userStatus.loading === 'failed') {
      if (userStatus.errorMessage === 'Request failed with status code 400') {
        Alert.alert('Error!', 'Email or password are not correct!');
      }
      if (userStatus.errorMessage === 'Request failed with status code 404') {
        Alert.alert('Error!', 'Something went wrong. Please, try again!');
      }
    }
  }, [userStatus]);

  return (
    <ScrollView style={styles.formContainer}>
      <CustomStatusBar />

      {/* Menu */}
      <LogInFormMenu onPressDots={() => {}} />

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
              title="email"
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
              title="password"
              type="password"
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </LoginForm>

      {userStatus.loading === 'pending' && (
        <ActivityIndicator size="large" color={Colors.secondaryColor} />
      )}
      {/* Delete Grid */}
      <LoginButton
        title="Login"
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
