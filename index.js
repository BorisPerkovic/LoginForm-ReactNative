/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './features/logInSlice';
import reportsReducer from './features/createReportSlice';
import { reportsApi } from './services/reportsAPI';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    reports: reportsReducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(reportsApi.middleware),
});

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
