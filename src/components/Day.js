import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { round } from '../utils';

export default ({ day, forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.day]}>{day}</Text>
      <View>
        <Text style={[styles.text, styles.weather]}>
          {forecast.weather[0].main}
        </Text>
        <Text style={[styles.text, styles.temp]}>
          {round(forecast.temp.max)}&deg;/{round(forecast.temp.min)}&deg;
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: RFValue(7),
    marginBottom: RFValue(7),
    paddingHorizontal: RFValue(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  text: {
    color: '#d1d1d1',
  },
  day: {
    fontSize: RFValue(25),
  },
  temp: {
    fontSize: RFValue(15),
  },
  weather: {
    color: '#8c8c8c',
    fontSize: RFValue(12),
  },
});
