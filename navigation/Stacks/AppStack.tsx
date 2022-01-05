import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePageScreen } from '../../screens//HomePageScreen';
import { CandidateReportsScreen } from '../../screens/CandidateReportsScreen';

export type AppStackParamList = {
  HomePage: undefined;
  CandReports: { candidateId: number; name: string; avatatar_url: string };
};

const Stack = createStackNavigator<AppStackParamList>();

/* App Stack Navigator */
export const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="CandReports" component={CandidateReportsScreen} />
    </Stack.Navigator>
  );
};
