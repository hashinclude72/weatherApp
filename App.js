/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { create } from 'apisauce';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@env';

import SplashyLoader from './src/components/SplashyLoader';
import Home from './src/components/Home';
import Error from './src/components/Error';
import useLocation from './src/utils/useLocation';

const weatherApi = create({
  baseURL: WEATHER_BASE_URL,
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
        appid: WEATHER_API_KEY,
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaProvider>
        {isLoading ? (
          <SplashyLoader />
        ) : error || locationError ? (
          <Error getWeather={getLocation} error={error} />
        ) : (
          <Home weather={weather} />
        )}
      </SafeAreaProvider>
    </>
  );
};

export default App;
