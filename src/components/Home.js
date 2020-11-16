import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default ({weather}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={[{flex: 6}]}>
          <Text>{weather?.current.temp}</Text>
        </View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
        <View style={[styles.days]}></View>
      </View>
    </View>
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
