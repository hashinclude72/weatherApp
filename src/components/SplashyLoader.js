import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import { WeatherContext } from '../utils';
export default () => {
  const { state } = useContext(WeatherContext);
  const { weather, forecast } = state;

  return (
    <View
      style={[
        styles.loaderContainer,
        { height: weather && forecast ? null : '100%' },
      ]}
    >
      <LottieView
        source={require('../lotties/splashy-loader.json')}
        loop={true}
        autoPlay={true}
        progress={0}
        speed={3}
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    paddingTop: 10,
    width: '100%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  loader: {
    width: 100,
    height: 100,
  },
});
