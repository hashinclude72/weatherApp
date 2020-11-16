import React from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';

import WeekDays from './WeekDays';
import Today from './Today';

export default ({ weather, forecast, getWeather }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={getWeather} />
      }
    >
      <Today weather={weather} />
      <WeekDays forecast={forecast} />
    </ScrollView>
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
});
