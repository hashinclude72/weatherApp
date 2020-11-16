import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

import { round, weatherIcons } from '../utils';

export default ({ day, forecast }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dayIconContainer}>
        <LottieView
          source={weatherIcons[forecast.weather[0].icon]}
          loop={true}
          autoPlay={true}
          progress={0}
          speed={2}
          style={styles.icon}
        />
        <Text style={[styles.text, styles.day]}>{day}</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.weather]}>
          {forecast.weather[0].main}
        </Text>
        <Text style={[styles.text, styles.temp]}>
          {round(forecast.temp.max)}&deg; / {round(forecast.temp.min)}&deg;
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
  dayIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#d1d1d1',
  },
  day: {
    marginLeft: RFValue(15),
    fontSize: RFValue(25),
  },
  temp: {
    fontSize: RFValue(15),
  },
  weather: {
    color: '#8c8c8c',
    fontSize: RFValue(12),
  },
  icon: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
