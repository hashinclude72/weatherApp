import React from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';
export default () => {
  return (
    <View style={styles.loaderContainer}>
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
    top: '45%',
    left: '50%',
    right: 0,
    margin: 'auto',
  },
  loader: {
    width: 100,
    height: 100,
  },
});
