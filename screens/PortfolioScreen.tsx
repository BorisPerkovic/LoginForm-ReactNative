import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { CompanyBottomTabsParamList } from '../navigation/Bottomtabs/CompanyBottomTabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { Menu } from '../components/Menu';

type PortolioPageNavigationType = StackNavigationProp<
  CompanyBottomTabsParamList,
  'Portfolio'
>;

export const Portfolio = () => {
  const navigation = useNavigation<PortolioPageNavigationType>();
  return (
    <View style={styles.container}>
      <Menu onPressDots={() => {}} />
      <View style={styles.container}>
        <Text>This is Portfolio Screen!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
