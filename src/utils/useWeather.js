import { useState, useEffect } from 'react';

import { create } from 'apisauce';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@env';

import useLocation from './useLocation';

const weatherApi = create({
  baseURL: WEATHER_BASE_URL,
});

export default () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: location,
    error: locationError,
    isLoading: locationIsLoading,
    getLocation,
  } = useLocation();

  useEffect(() => {
    if (location) {
      fetchWeather('/weather');
      fetchWeather('/forecast');
    }
  }, [location]);

  useEffect(() => {
    if (locationError) {
      setError(locationError);
    }
  }, [locationError]);

  const getWeather = () => {
    setIsLoading(true);
    getLocation();
  };

  const fetchWeather = async (url) => {
    // get weather data from openweathermap.org
    setError();
    try {
      const response = await weatherApi.get(url, {
        lat: location.latitude,
        lon: location.longitude,
        exclude: 'minutely,hourly',
        units: 'metric',
        appid: WEATHER_API_KEY,
      });
      console.log('fetchWeather : ', url, response.data);
      if (!response.ok) {
        setError('Network error');
      }
      if (url === '/weather') {
        setWeather(response.data);
      } else {
        setForecast(response.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log('Connection failed');
      setError('Connection failed');
      setIsLoading(false);
    }
  };

  return { weather, forecast, error, isLoading, getWeather };
};
