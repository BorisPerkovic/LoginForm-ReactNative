import React from 'react';
import { View, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';

import Colors from '../constants/colors';
import { DefaultText } from '../components/DefaultText';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { ElipsisIcon } from '../components/ElipsisIcon';

export const LoginFormScreen = () => {
  console.log(Dimensions.get('window').height);

  return (
    <View style={styles.formContainer}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={styles.top}>
        <View style={styles.svg}>
          <ElipsisIcon
            width={Dimensions.get('window').width >= 350 ? 50 : 45}
            height={Dimensions.get('window').width >= 350 ? 30 : 25}
            color="#b0b5c2"
            viewBox={
              Dimensions.get('window').width >= 350
                ? '10 0 50 50'
                : '10 -15 50 50'
            }
          />
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
      </View>
      <View style={styles.inputContainer}>
        <DefaultText textStyle={styles.inputLabel}>Email</DefaultText>
        <CustomInput
          style={styles.input}
          type={false}
          onChangeText={() => {}}
        />
        <DefaultText textStyle={styles.inputLabel}>Password</DefaultText>
        <CustomInput style={styles.input} type={true} onChangeText={() => {}} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.forgotPass}>
          <DefaultText>Forgot password?</DefaultText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Log In"
            style={styles.button}
            buttonTextStyle={styles.buttonText}
            onPress={() => {
              console.log('pressed');
            }}
          />
        </View>
        <View style={styles.account}>
          <DefaultText>Don't have an account?</DefaultText>
          <DefaultText
            textStyle={{
              color: '#E9E9EB',
              fontWeight: 'bold',
              marginTop: Dimensions.get('window').width >= 350 ? 10 : 5,
            }}>
            Create an Account.
          </DefaultText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  top: {
    height: '40%',
    paddingVertical: 10,
  },
  imageContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width >= 350 ? 170 : 100,
    height: Dimensions.get('window').width >= 350 ? 170 : 100,
    marginTop: Dimensions.get('window').width >= 350 ? 30 : 10,
  },
  title: {
    fontSize: Dimensions.get('window').width >= 350 ? 30 : 25,
    color: '#E9E9EB',
    marginBottom: Dimensions.get('window').width >= 350 ? 20 : 10,
  },
  inputContainer: {
    height: '30%',
    paddingHorizontal: 35,
  },
  inputLabel: {
    fontSize: Dimensions.get('window').width >= 350 ? 15 : 12,
    marginTop: Dimensions.get('window').width >= 350 ? 30 : 20,
  },
  input: {
    height: Dimensions.get('window').width >= 350 ? 40 : 35,
    borderBottomColor: '#3C4760',
    borderBottomWidth: Dimensions.get('window').width >= 350 ? 3 : 2,
    color: 'white',
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 13,
  },
  bottom: {
    height: '30%',
  },
  forgotPass: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Dimensions.get('window').width >= 350 ? 20 : 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Dimensions.get('window').width >= 350 ? 20 : 15,
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
    height: Dimensions.get('window').width >= 350 ? 44 : 35,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width >= 350 ? 18 : 15,
    color: 'black',
  },
  svg: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
