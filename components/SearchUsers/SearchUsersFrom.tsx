import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { SearchUsersInput } from './SearchUsersInput';
import { ErrorMessage } from '../ErrorMessage';

import Colors from '../../constants/colors';
import { SearchUsersList } from './SearchUsersList';

interface InputType {
  text: string;
}

export const SearchUsersForm = () => {
  const [enteredText, setEnteredText] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (data: InputType) => {
    setEnteredText(data.text);
  };

  return (
    <View style={styles.containerForm}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Field is required',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SearchUsersInput
            type="text"
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="text"
      />
      {errors.text && <ErrorMessage message={errors.text.message} />}
      <View style={styles.button}>
        <Button
          title="SEARCH"
          color={Colors.primaryColor}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      {enteredText !== '' ? (
        <SearchUsersList param={enteredText} />
      ) : (
        <Text style={{ textAlign: 'center' }}>Users will appear here</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    padding: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
