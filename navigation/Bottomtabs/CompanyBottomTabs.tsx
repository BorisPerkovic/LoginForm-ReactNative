import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Mission } from '../../screens/MissonScreen';
import { Portfolio } from '../../screens/PortfolioScreen';
import { Company } from '../../screens/CompanyScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type CompanyBottomTabsParamList = {
  Company: undefined;
  Portfolio: undefined;
  Mission: undefined;
};

const CompanyBottomTabsNavigator =
  createBottomTabNavigator<CompanyBottomTabsParamList>();

/* Company Bottom Tab Navigator */
export const CompanyBottomTabNavigator = () => {
  return (
    <CompanyBottomTabsNavigator.Navigator
      initialRouteName="Company"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <CompanyBottomTabsNavigator.Screen
        name="Company"
        component={Company}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <CompanyBottomTabsNavigator.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="code-working-outline" size={size} color={color} />
            );
          },
        }}
      />
      <CompanyBottomTabsNavigator.Screen
        name="Mission"
        component={Mission}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="earth-outline" size={size} color={color} />;
          },
        }}
      />
    </CompanyBottomTabsNavigator.Navigator>
  );
};
