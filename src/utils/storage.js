import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const getItem = (key) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (e) {
    console.log('error getting', key, ': ', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error getting', key, ': ', e);
  }
};

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('error setting', key, ': ', e);
  }
};

const setData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error setting', key, ': ', e);
  }
};

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('error removing', key, ': ', e);
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('error clearAll : ', e);
  }
};

const weather = {
  get: () => getData('weather'),
  set: (value) => setData('weather', value),
};

const forecast = {
  get: () => getData('forecast'),
  set: (value) => setData('forecast', value),
};

const units = {
  get: () => getItem('units'),
  set: (value) => setItem('units', value),
};

const timeFormat = {
  get: () => getItem('timeFormat'),
  set: (value) => setItem('timeFormat', value),
};

const theme = {
  get: () => getItem('theme'),
  set: (value) => setItem('theme', value),
};

const getAll = async () => {
  return {
    weather: await weather.get(),
    forecast: await forecast.get(),
    units: await units.get(),
    timeFormat: await timeFormat.get(),
    theme: await theme.get(),
  };
};

const useStorage = () => {
  const dispatch = useDispatch();

  const fetchStorage = async () => {
    dispatch({
      type: 'storage',
      payload: await getAll(),
    });
  };

  return fetchStorage;
};

export default useStorage;
export { weather, forecast, units, timeFormat, theme, clearStorage, getAll };
