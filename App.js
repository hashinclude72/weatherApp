/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useReducer } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/components/Home';
import Error from './src/components/Error';
import SplashyLoader from './src/components/SplashyLoader';
import { useWeather, WeatherContext, initialState, reducer } from './src/utils';

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getWeather } = useWeather({
    dispatch,
  });

  const { error, isLoading, weather, forecast } = state;

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaProvider>
        <View style={styles.container}>
          {error ? (
            <Error getWeather={getWeather} />
          ) : (
            weather && forecast && <Home getWeather={getWeather} />
          )}
          {isLoading && <SplashyLoader />}
        </View>
      </SafeAreaProvider>
    </WeatherContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
