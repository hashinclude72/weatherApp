import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';

import Day from './Day';

export default ({ forecast }) => {
  const [today] = useState(moment().format('dddd'));
  const [dayNames, setDayNames] = useState();

  useEffect(() => {
    let weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let dayNo = weekDays.indexOf(today);
    let day = '';
    while (dayNo >= 0) {
      day = weekDays.shift();
      weekDays.push(day);
      dayNo--;
    }
    weekDays = weekDays.slice(0, 5);
    setDayNames(weekDays);
  }, [today]);

  return (
    <View style={styles.container}>
      {dayNames &&
        dayNames.map((day, index) => (
          <Day key={index} day={day} forecast={forecast.daily[index + 1]} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(10),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
});
