import { useState, useEffect } from 'react';

import { create } from 'apisauce';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@env';

import useLocation from './useLocation';

const weatherApi = create({
  baseURL: WEATHER_BASE_URL,
});

export default ({ dispatch }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [forecastLoading, setForecastLoading] = useState(true);

  const {
    data: location,
    error: locationError,
    isLoading: locationIsLoading,
    getLocation,
  } = useLocation();

  useEffect(() => {
    if (location) {
      setWeatherLoading(true);
      setForecastLoading(true);
      fetchWeather('weather');
      fetchWeather('onecall');
    }
  }, [location]);

  useEffect(() => {
    if (!weatherLoading && !forecastLoading) {
      setIsLoading(false);
      dispatch({
        type: 'isLoading',
        payload: false,
      });
    }
  }, [weatherLoading, forecastLoading]);

  useEffect(() => {
    if (locationError) {
      setError(locationError);
    }
  }, [locationError]);

  useEffect(() => {
    if (error) {
      dispatch({
        type: 'error',
        payload: error,
      });
    }
  }, [error]);

  const getWeather = () => {
    setIsLoading(true);
    dispatch({
      type: 'isLoading',
      payload: true,
    });
    getLocation();
  };

  const fetchWeather = async (url) => {
    // get weather data from openweathermap.org
    setError();
    try {
      const response = await weatherApi.get('/' + url, {
        lat: location.latitude,
        lon: location.longitude,
        exclude: 'minutely,hourly',
        units: 'metric',
        appid: WEATHER_API_KEY,
      });
      console.log('fetchWeather : ', url, response.ok);
      if (!response.ok) {
        setError('Network error');
      }
      dispatch({
        type: url,
        payload: response.data,
      });

      if (url === 'weather') {
        setWeather(response.data);
        setWeatherLoading(false);
      } else {
        setForecast(response.data);
        setForecastLoading(false);
      }
    } catch (err) {
      console.log('Connection failed');
      setError('Connection failed');
      setIsLoading(false);
    }
  };

  return { weather, forecast, error, isLoading, getWeather };
};
