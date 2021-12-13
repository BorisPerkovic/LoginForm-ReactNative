import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import Colors from '../../constants/colors';
import { ErrorMessage } from '../ErrorMessage';

type SearchFormTypes = {
  search: string;
};

export const SearchUsersForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormTypes>({
    defaultValues: {
      search: '',
    },
  });

  /* form validation function */
  const onSubmit = (data: SearchFormTypes) => {
    console.log(data.search);

    //navigation.navigate('HomePage');
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
          <TextInput
            onChangeText={value => onChange(value)}
            value={value}
            style={styles.input}
            placeholder="Type Username"
          />
        )}
        name="search"
      />
      {errors.search && <ErrorMessage message={errors.search.message} />}
      <View style={styles.button}>
        <Button
          title="SEARCH"
          color={Colors.primaryColor}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
