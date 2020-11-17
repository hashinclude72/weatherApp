import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import Toast from 'react-native-simple-toast';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';

export default ({ getWeather }) => {
  const error = useSelector((state) => state.error);

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
    fontSize: RFValue(60),
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  retry: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: RFValue(60),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryText: {
    fontSize: RFValue(25),
    justifyContent: 'center',
  },
});
