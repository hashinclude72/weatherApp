/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Theme from './src/containers/Theme';
import StackNavigation from './src/containers/StackNavigation';
import { store } from './src/utils';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Theme>
        <SafeAreaProvider>
          <StackNavigation />
        </SafeAreaProvider>
      </Theme>
    </Provider>
  );
};

export default App;
