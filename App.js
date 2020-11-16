/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {create} from 'apisauce';

import SplashyLoader from './src/components/SplashyLoader';
import Home from './src/components/Home';
import Error from './src/components/Error';
import useLocation from './src/utils/useLocation';

const weatherApi = create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const App: () => React$Node = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const {
    data: location,
    error: locationError,
    isLoading: locationIsLoading,
    getLocation,
  } = useLocation();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  const fetchWeather = async () => {
    setError();
    try {
      const response = await weatherApi.get('/onecall', {
        lat: location.latitude,
        lon: location.longitude,
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
        {error || locationError ? <Error /> : <Home weather={weather} />}
        {isLoading && <SplashyLoader />}
      </SafeAreaProvider>
    </>
  );
};

export default App;
