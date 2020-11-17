import { createStore } from 'redux';

const initialState = {
  weather: null,
  forecast: null,
  error: null,
  isLoading: true,
};

const rootReducer = (state = initialState, action) => {
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

export const store = createStore(rootReducer);
