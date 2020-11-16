/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {create} from 'apisauce';

import SplashyLoader from './src/components/SplashyLoader';
import Home from './src/components/Home';
import Error from './src/components/Error';

const weatherApi = create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const App: () => React$Node = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setError();
    try {
      const response = await weatherApi.get('/onecall', {
        lat: 31.91,
        lon: 76.72,
        exclude: 'minutely,hourly',
        units: 'metric',
        appid: '95751c1012c19df3754e2845e8fa3ff3',
      });
      console.log('fetchWeather : ', response);
      if (!response.ok) {
        setError('Network error');
      }
      setWeather(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Connection failed');
      setError('Connection failed');
      setIsLoading(false);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        {error ? <Error /> : <Home weather={weather} />}
        {isLoading && <SplashyLoader />}
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  days: {
    borderWidth: 2,
    flex: 1,
  },
});

export default App;
