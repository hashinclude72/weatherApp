import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Something Went Wrong at our End</Text>
        <Button title="RETRY" />
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
});
