import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';

import { round } from '../utils';

export default ({ weather }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, styles.time]}>
        {moment().format('dddd, D MMM h:m a')}
      </Text>
      <Text style={[styles.text, styles.temp]}>
        {round(weather.main.temp)}&deg;
      </Text>
      <Text style={[styles.text, styles.location]}>{weather.name}</Text>
      <Text style={[styles.text, styles.feels]}>
        Feels Like {round(weather.main.feels_like)}&deg;
      </Text>
      <Text style={[styles.text, styles.weather]}>
        {weather.weather[0].main}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    padding: 5,
    color: '#d1d1d1',
    justifyContent: 'center',
  },
  time: {
    color: '#8c8c8c',
    fontSize: RFValue(17),
  },
  temp: {
    fontSize: RFValue(50),
  },
  location: {
    fontSize: RFValue(30),
  },
  feels: {
    color: '#8c8c8c',
    fontSize: RFValue(13),
  },
  weather: {
    fontSize: RFValue(17),
  },
});
