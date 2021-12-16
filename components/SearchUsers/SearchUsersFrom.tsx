import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import { useForm, Controller } from 'react-hook-form';
import { SearchUsersInput } from './SearchUsersInput';
import { ErrorMessage } from '../ErrorMessage';
import { SearchUsersList } from './SearchUsersList';

interface InputType {
  text: string;
}

export const SearchUsersForm = () => {
  const [enteredText, setEnteredText] = useState('');

  const {
    control,
    formState: { errors },
  } = useForm<InputType>({
    defaultValues: {
      text: '',
    },
    mode: 'onChange',
  });

  const debounced = useDebouncedCallback(value => {
    setEnteredText(value);
  }, 1000);

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
        render={({ field: { onChange, value } }) => {
          return (
            <SearchUsersInput
              type="text"
              onChangeText={value => onChange(() => debounced(value))}
              value={value}
            />
          );
        }}
        name="text"
      />
      {errors.text && <ErrorMessage message={errors.text.message} />}
      <View style={styles.containerList}>
        {enteredText !== '' ? (
          <SearchUsersList param={enteredText} />
        ) : (
          <Text style={{ textAlign: 'center' }}>Users will appear here</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    padding: 20,
  },
  containerList: {
    flex: 1,
    width: '100%',
  },
});
