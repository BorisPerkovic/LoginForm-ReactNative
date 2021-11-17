import React, { FunctionComponent } from 'react';
import { Button } from 'react-native';

import Colors from '../constants/colors';

interface DueafultButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton: FunctionComponent<DueafultButtonProps> = ({
  title,
  onPress,
}) => {
  return <Button title={title} color={Colors.buttonColor} onPress={onPress} />;
};
