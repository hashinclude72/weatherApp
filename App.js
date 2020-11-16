/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import SplashyLoader from './src/components/SplashyLoader';

const App: () => React$Node = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <View style={[{flex: 6}]}></View>
            <View style={[styles.days]}></View>
            <View style={[styles.days]}></View>
            <View style={[styles.days]}></View>
            <View style={[styles.days]}></View>
            <View style={[styles.days]}></View>
          </View>
        </View>
        {isLoading && <SplashyLoader />}
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  days: {
    borderWidth: 2,
    flex: 1,
  },
});

export default App;
