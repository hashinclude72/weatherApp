import { createStore } from 'redux';
import { weather, forecast, units, timeFormat, theme } from './storage';

const initialState = {
  weather: null,
  forecast: null,
  error: null,
  isLoading: true,
  units: 'metric',
  timeFormat: '24',
  theme: 'black',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'storage': {
      console.log('rootReducer storage : ');
      return {
        ...state,
        weather: action.payload.weather || initialState.weather,
        forecast: action.payload.forecast || initialState.forecast,
        timeFormat: action.payload.timeFormat || initialState.timeFormat,
        units: action.payload.units || initialState.units,
        theme: action.payload.theme || initialState.theme,
      };
    }
    case 'weather': {
      console.log('rootReducer weather : ');
      weather.set(action.payload);
      return {
        ...state,
        weather: action.payload,
      };
    }
    case 'onecall': {
      forecast.set(action.payload);
      return {
        ...state,
        forecast: action.payload,
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
