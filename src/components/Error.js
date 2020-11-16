import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import Toast from 'react-native-simple-toast';

export default ({ getWeather, error }) => {
  useEffect(() => {
    if (error) {
      Toast.show(error, Toast.SHORT);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.error}>
        <Text style={styles.errorText}>Something Went Wrong at our End</Text>
        <Pressable
          onPress={() => getWeather()}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'white' : 'black',
            },
            styles.retry,
          ]}
        >
          {({ pressed }) => (
            <Text
              style={[
                {
                  color: pressed ? 'black' : 'white',
                },
                styles.retryText,
              ]}
            >
              RETRY
            </Text>
          )}
        </Pressable>
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
    backgroundColor: '#000',
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 24,
  },
  errorText: {
    fontSize: 80,
    color: 'grey',
    padding: 20,
  },
  retry: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 15,
    marginTop: 100,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryText: {
    fontSize: 25,
    justifyContent: 'center',
  },
});
