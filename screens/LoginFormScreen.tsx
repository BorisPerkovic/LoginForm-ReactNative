import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { DefaultText } from '../components/DefaultText';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

const LoginFormScreen = () => {
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
      <View>
        <Text>Forgot password?</Text>
        <CustomButton title="Log In" onPress={onPress} />
      </View>
      <View>
        <Text>Don't have an account?</Text>
        <Text>Create an Account</Text>
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
    width: 200,
    height: 200,
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
});

export default LoginFormScreen;
