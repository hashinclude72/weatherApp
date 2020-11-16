import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import moment from 'moment';

export default ({ weather }) => {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={[styles.today]}>
          <Text style={[styles.text, styles.time]}>
            {moment().format('dddd, D MMM h:m a')}
          </Text>
          <Text style={[styles.text, styles.temp]}>
            {Math.round(weather.current.temp)}&deg;
          </Text>
          <Text style={[styles.text, styles.location]}>Delhi</Text>
          <Text style={[styles.text, styles.feels]}>
            {Math.round(weather.daily[0].temp.max)}&deg;/
            {Math.round(weather.daily[0].temp.min)}&deg; Feels Like{' '}
            {Math.round(weather.current.feels_like)}&deg;
          </Text>
          <Text style={[styles.text, styles.weather]}>
            {weather.current.weather[0].main}
          </Text>
        </View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
  days: {
    borderWidth: 2,
    borderColor: 'grey',
    flex: 1,
  },
  today: {
    flex: 5,
    marginTop: 30,
    padding: 30,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    // borderWidth: 4,
    borderColor: 'white',
    color: '#d1d1d1',
    justifyContent: 'center',
  },
  time: {
    color: 'grey',
    fontSize: 20,
  },
  temp: {
    fontSize: 80,
  },
  location: {
    fontSize: 40,
  },
  feels: {
    color: 'grey',
    fontSize: 15,
  },
  weather: {
    fontSize: 20,
  },
});
