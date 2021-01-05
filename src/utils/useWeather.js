import { useState, useEffect } from 'react';

import { create } from 'apisauce';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from '@env';
import { useDispatch, useSelector } from 'react-redux';

import useLocation from './useLocation';

const weatherApi = create({
  baseURL: WEATHER_BASE_URL,
});

export default () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [forecastLoading, setForecastLoading] = useState(true);

  const units = useSelector((state) => state.units);
  const dispatch = useDispatch();

  const {
    data: location,
    error: locationError,
    isLoading: locationIsLoading,
    getLocation,
  } = useLocation();

  useEffect(() => {
    if (!locationIsLoading && location) {
      setWeatherLoading(true);
      setForecastLoading(true);
      fetchWeather('weather');
      fetchWeather('onecall');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (!weatherLoading && !forecastLoading) {
      setIsLoading(false);
      dispatch({
        type: 'isLoading',
        payload: false,
      });
    }
  }, [weatherLoading, forecastLoading, dispatch]);

  useEffect(() => {
    if (locationError || error) {
      dispatch({
        type: 'error',
        payload: locationError || error,
      });
      setIsLoading(false);
      dispatch({
        type: 'isLoading',
        payload: false,
      });
    }
  }, [locationError, error, dispatch]);

  const getWeather = () => {
    setIsLoading(true);
    dispatch({
      type: 'isLoading',
      payload: true,
    });
    setError();
    dispatch({
      type: 'error',
      payload: null,
    });
    getLocation();
  };

  const fetchWeather = async (url) => {
    // get weather data from openweathermap.org
    try {
      const response = await weatherApi.get('/' + url, {
        lat: location.latitude,
        lon: location.longitude,
        units: units,
        appid: WEATHER_API_KEY,
      });
      console.log('fetchWeather : ', url, response.ok);
      if (!response.ok || !response.data) {
        setError('Check your connection');
      }

      if (response.data) {
        dispatch({
          type: url,
          payload: response.data,
        });
      }

      if (url === 'weather') {
        setWeather(response.data);
        setWeatherLoading(false);
      } else {
        setForecast(response.data);
        setForecastLoading(false);
      }
    } catch (err) {
      console.error('Connection failed');
      setError('Connection Failed');
      setIsLoading(false);
    }
  };

  return { weather, forecast, error, isLoading, getWeather };
};
