import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { primaryColor } from './globalStyles';

export default function() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
