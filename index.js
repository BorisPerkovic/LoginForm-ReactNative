/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tokenReducer from './features/auth';
import { githubApi } from './services/githubApi';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(githubApi.middleware),
});

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
