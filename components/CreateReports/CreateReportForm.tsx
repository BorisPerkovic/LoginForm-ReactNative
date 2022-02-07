import React, { FunctionComponent, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ErrorMessage } from '../UI/ErrorMessage';

import Colors from '../../constants/colors';

interface CreaterReportFormProps {
  position: number;
  newReport: any;
  setPosition: (param: number) => void;
  setNewReport: (params: any) => void;
}

type ReportFormTypes = {
  date: string;
  note: string;
  phase: string;
  status: string;
};

export const CreateReportForm: FunctionComponent<CreaterReportFormProps> = ({
  position,
  newReport,
  setPosition,
  setNewReport,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportFormTypes>({
    defaultValues: {
      date: '',
      note: '',
      phase: '',
      status: '',
    },
  });

  const interViewStatusRef = useRef(null);
  const interViewPhaseRef = useRef(null);
  const interViewNoteRef = useRef(null);

  const onSubmit = (data: ReportFormTypes) => {
    setNewReport({
      ...newReport,
      interviewDate: data.date,
      note: data.note,
      phase: data.phase,
      status: data.status,
    });
    setPosition(position + 1);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.selectedItems}>
        <Text style={styles.selectedItemstext}>
          Selected Candidate: {newReport.candidateName}
        </Text>
        <Text style={styles.selectedItemstext}>
          Selected Company: {newReport.companyName}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={() => setPosition(position - 1)}
          color={Colors.primaryColor}
        />
        <Button
          title="Next"
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
          color={Colors.primaryColor}
        />
      </View>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Date is required',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.inputs}
            // eslint-disable-next-line no-shadow
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Interview Date"
            keyboardType="numeric"
            onSubmitEditing={() => interViewPhaseRef.current?.focus()}
          />
        )}
        name="date"
      />
      {errors.date && <ErrorMessage message={errors.date.message} />}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Status is required',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.inputs}
            // eslint-disable-next-line no-shadow
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Interview Status"
            onSubmitEditing={() => interViewStatusRef.current?.focus()}
            ref={interViewPhaseRef}
          />
        )}
        name="status"
      />
      {errors.status && <ErrorMessage message={errors.status.message} />}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Phase is required',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.inputs}
            // eslint-disable-next-line no-shadow
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Interview Phase"
            ref={interViewStatusRef}
            onSubmitEditing={() => interViewNoteRef.current?.focus()}
          />
        )}
        name="phase"
      />
      {errors.phase && <ErrorMessage message={errors.phase.message} />}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Note is required',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.inputs}
            // eslint-disable-next-line no-shadow
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Interview Note"
            ref={interViewNoteRef}
          />
        )}
        name="note"
      />
      {errors.note && <ErrorMessage message={errors.note.message} />}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  selectedItems: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItemstext: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  inputs: {
    height: 45,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
