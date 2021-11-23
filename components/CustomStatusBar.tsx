import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import Colors from '../constants/colors';

interface DefaultStatuBarProps {
  color?: string;
}

export const CustomStatusBar: FunctionComponent<DefaultStatuBarProps> = ({
  color = Colors.primaryColor,
}) => {
  return <StatusBar backgroundColor={color} />;
};
