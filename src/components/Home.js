import React from 'react';
import { StyleSheet, View } from 'react-native';

import WeekDays from './WeekDays';
import Today from './Today';

export default ({ weather, forecast }) => {
  return (
    <View style={styles.container}>
      <Today weather={weather} />
      <WeekDays forecast={forecast} />
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
});
