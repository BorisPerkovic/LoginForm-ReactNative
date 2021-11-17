import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface DefaultTextProps {
  textStyle: StyleProp<TextStyle>;
}

export const DefaultText: FunctionComponent<DefaultTextProps> = ({
  textStyle,
  children,
}) => {
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#888',
  },
});
