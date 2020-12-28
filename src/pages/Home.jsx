import React, { useEffect, useContext } from 'react';
import { RefreshControl, View, Text, Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import Error from '../components/Error';
import WeekDays from '../components/WeekDays';
import Today from '../components/Today';
import HourlyTimeline from '../components/HourlyTimeline';
import { useWeather, useStorage } from '../utils';

export default ({ navigation }) => {
  const screenHeight = Dimensions.get('screen').height;
  const themeContext = useContext(ThemeContext);
  const { error, isLoading, weather, forecast } = useSelector((state) => state);
  const { getWeather } = useWeather();
  const fetchStorage = useStorage();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    getWeather();
    fetchStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      Toast.show(error, Toast.SHORT);
    }
  }, [error]);
  return (
    <Container>
      {weather && forecast ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              size={10}
              refreshing={isLoading}
              onRefresh={getWeather}
              tintColor={themeContext.colors.primary}
              progressBackgroundColor={themeContext.colors.backgroundAlt}
              colors={[themeContext.colors.primary]}
              progressViewOffset={RFValue(20)}
            />
          }
        >
          <View
            style={{
              height: screenHeight,
            }}
          >
            <Today />
            <WeekDays />
          </View>
          <HourlyTimeline />
        </ScrollView>
      ) : (
        error && <Error getWeather={getWeather} />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
}))``;
