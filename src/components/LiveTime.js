import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';

export default () => {
  const [currTime, setCurrTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text style={[styles.text, styles.time]}>
      {moment(currTime).format('dddd, D MMM h:m a')}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 5,
    color: '#d1d1d1',
    justifyContent: 'center',
  },
  time: {
    color: '#8c8c8c',
    fontSize: RFValue(17),
  },
});
