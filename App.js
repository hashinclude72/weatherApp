/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/components/Home';
import Error from './src/components/Error';
import SplashyLoader from './src/components/SplashyLoader';
import { useWeather } from './src/utils';

const App: () => React$Node = () => {
  const { weather, forecast, error, isLoading, getWeather } = useWeather();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaProvider>
        {isLoading ? (
          <SplashyLoader />
        ) : error ? (
          <Error getWeather={getWeather} error={error} />
        ) : (
          <Home weather={weather} forecast={forecast} />
        )}
      </SafeAreaProvider>
    </>
  );
};

export default App;
