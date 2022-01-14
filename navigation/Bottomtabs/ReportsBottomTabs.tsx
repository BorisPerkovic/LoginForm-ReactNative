import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Mission } from '../../screens/MissonScreen';
import { CreateReportScreen } from '../../screens/CreateReportScreen';
import { ReportsScreen } from '../../screens/ReportsScreen';
import Colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

export type ReportsBottomTabsParamList = {
  Reports: undefined;
  Create: undefined;
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
        name="Create"
        component={CreateReportScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="create-outline" size={size} color={color} />;
          },
        }}
      />
    </CompanyBottomTabsNavigator.Navigator>
  );
};
