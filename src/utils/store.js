import { createContext } from 'react';

export const WeatherContext = createContext();

export const initialState = {
  weather: null,
  forecast: null,
  error: null,
  isLoading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'weather': {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case 'onecall': {
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
    default:
      return state;
  }
};
