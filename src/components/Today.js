import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import LiveTime from './LiveTime';
import { round, weatherIcons } from '../utils';

export default () => {
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={[styles.container]}>
      <LiveTime />
      <View style={styles.iconContainer}>
        <LottieView
          source={weatherIcons[weather.weather[0].icon]}
          loop={true}
          autoPlay={true}
          progress={0}
          speed={1}
          style={styles.icon}
        />
        <Text style={[styles.text, styles.temp]}>
          {round(weather.main.temp)}&deg;
        </Text>
      </View>
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RFValue(70),
    height: RFValue(70),
  },
  temp: {
    fontSize: RFValue(70),
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
