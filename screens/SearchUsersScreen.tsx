import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { CustomMenu } from '../components/Menu/Menu';
import { useNavigation } from '@react-navigation/native';
import { SearchUsersInput } from '../components/SearchUsers/SearchUsersInput';
import { SearchUsersList } from '../components/SearchUsers/SearchUsersList';
import { ErrorMessage } from '../components/ErrorMessage';

import Colors from '../constants/colors';

type SearchFormTypes = {
  text: string;
};

export const SearchUsersScreen = () => {
  const [text, setText] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormTypes>({
    defaultValues: {
      text: '',
    },
  });
  //const navigation = useNavigation<AccountPageNavigationType>();

  const onSubmit = (data: SearchFormTypes) => {
    setText(data.text);
  };

  console.log('render from search');

  return (
    <View style={styles.container}>
      <CustomMenu onPressDots={() => {}} />
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
      </View>
      <View style={styles.button}>
        <Button
          title="SEARCH"
          color={Colors.primaryColor}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      {text !== '' ? <SearchUsersList param={text} /> : <Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    padding: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
