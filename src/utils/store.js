import { createStore } from 'redux';
import moment from 'moment';
import { weather, forecast, units, timeFormat, theme } from './storage';

const initialState = {
  weather: null,
  forecast: null,
  error: null,
  isLoading: false,
  units: 'metric',
  timeFormat: '24',
  theme: 'black',
  clickedIndex: 0,
  daily: [],
  hasData: false,
  lastFetched: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'storage': {
      console.log('storage fetch');

      return {
        ...state,
        weather: action.payload.weather || state.weather,
        forecast: action.payload.forecast || state.forecast,
        timeFormat: action.payload.timeFormat || state.timeFormat,
        units: action.payload.units || state.units,
        theme: action.payload.theme || state.theme,
        daily: action.payload.forecast.daily || state.daily,
        hasData:
          action.payload.weather && action.payload.forecast
            ? true
            : state.hasData,
        lastFetched: action.payload.weather.dt * 1000 || state.lastFetched,
      };
    }
    case 'weather': {
      weather.set(action.payload);
      return {
        ...state,
        weather: action.payload,
        hasData: state.forecast ? true : state.hasData,
        lastFetched: moment(),
      };
    }
    case 'onecall': {
      forecast.set(action.payload);
      return {
        ...state,
        forecast: action.payload,
        daily: action.payload.daily,
        hasData: state.weather ? true : state.hasData,
        lastFetched: moment(),
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
      };
    }
    case 'isLoading': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'timeFormat': {
      timeFormat.set(action.payload);
      return {
        ...state,
        timeFormat: action.payload,
      };
    }
    case 'units': {
      units.set(action.payload);
      return {
        ...state,
        units: action.payload,
      };
    }
    case 'theme': {
      theme.set(action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
