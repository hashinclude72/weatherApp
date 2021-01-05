export const round = (no) => {
  return Math.round(no);
};

export const floor = (no) => {
  return Math.floor(no);
};

export const ceil = (no) => {
  return Math.ceil(no);
};

export const weatherIcons = {
  '01d': {
    icon: 'weather-sunny',
    animation: require('../assets/lotties/01d.json'),
  },
  '01n': {
    icon: 'weather-night',
    animation: require('../assets/lotties/01n.json'),
  },
  '02d': {
    icon: 'weather-partly-cloudy',
    animation: require('../assets/lotties/02d.json'),
  },
  '02n': {
    icon: 'weather-night-partly-cloudy',
    animation: require('../assets/lotties/02n.json'),
  },
  '03d': {
    icon: 'weather-cloudy',
    animation: require('../assets/lotties/03d.json'),
  },
  '03n': {
    icon: 'weather-cloudy',
    animation: require('../assets/lotties/03d.json'),
  },
  '04d': {
    icon: 'weather-cloudy',
    animation: require('../assets/lotties/03d.json'),
  },
  '04n': {
    icon: 'weather-cloudy',
    animation: require('../assets/lotties/03d.json'),
  },
  '09d': {
    icon: 'weather-rainy',
    animation: require('../assets/lotties/09d.json'),
  },
  '09n': {
    icon: 'weather-rainy',
    animation: require('../assets/lotties/09n.json'),
  },
  '10d': {
    icon: 'weather-pouring',
    animation: require('../assets/lotties/09d.json'),
  },
  '10n': {
    icon: 'weather-pouring',
    animation: require('../assets/lotties/09n.json'),
  },
  '11d': {
    icon: 'weather-lightning-rainy',
    animation: require('../assets/lotties/11d.json'),
  },
  '11n': {
    icon: 'weather-lightning-rainy',
    animation: require('../assets/lotties/11n.json'),
  },
  '13d': {
    icon: 'weather-snowy-heavy',
    animation: require('../assets/lotties/13d.json'),
  },
  '13n': {
    icon: 'weather-snowy-heavy',
    animation: require('../assets/lotties/13n.json'),
  },
  '50d': {
    icon: 'weather-fog',
    animation: require('../assets/lotties/50d.json'),
  },
  '50n': {
    icon: 'weather-fog',
    animation: require('../assets/lotties/50n.json'),
  },
};
