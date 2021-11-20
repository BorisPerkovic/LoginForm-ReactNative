import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

interface DefaultStatuBarProps {
  bgColor: string;
}

export const CustomStatusBar: FunctionComponent<DefaultStatuBarProps> = ({
  bgColor,
}) => {
  return <StatusBar backgroundColor={bgColor} />;
};
