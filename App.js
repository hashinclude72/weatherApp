/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from './src/components/Navigation';
import { store } from './src/utils';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
