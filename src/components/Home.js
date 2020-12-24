import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, RefreshControl, View } from 'react-native';

import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Error from './Error';
import SplashyLoader from './SplashyLoader';
import WeekDays from './WeekDays';
import Today from './Today';
import { useWeather } from '../utils';

export default () => {
  const { error, isLoading, weather, forecast } = useSelector((state) => state);

  const { getWeather } = useWeather();

  useEffect(() => {
    // SplashScreen.hide();
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Error getWeather={getWeather} />
      ) : (
        weather &&
        forecast && (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={getWeather} />
            }
          >
            <Today />
            <WeekDays />
          </ScrollView>
        )
      )}
      {/* {isLoading && <SplashyLoader />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
});
