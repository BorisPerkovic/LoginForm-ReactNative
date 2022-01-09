import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Mission } from '../../screens/MissonScreen';
import { Portfolio } from '../../screens/PortfolioScreen';
import { ReportsScreen } from '../../screens/ReportsScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

export type ReportsBottomTabsParamList = {
  Reports: undefined;
  Portfolio: undefined;
  Mission: undefined;
};

const CompanyBottomTabsNavigator =
  createBottomTabNavigator<ReportsBottomTabsParamList>();

/* Company Bottom Tab Navigator */
export const ReportsBottomTabNavigator = () => {
  return (
    <CompanyBottomTabsNavigator.Navigator
      initialRouteName="Reports"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: Colors.primaryColor,
      }}>
      <CompanyBottomTabsNavigator.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="report" size={size} color={color} />;
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
