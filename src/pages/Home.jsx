import React, { useEffect } from 'react';
import {
  RefreshControl,
  View,
  Text,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';

import Error from '../components/Error';
import WeekDays from '../components/WeekDays';
import Today from '../components/Today';
import { useWeather } from '../utils';

export default ({ navigation }) => {
  const windowHeight = useWindowDimensions().height;
  const headerHeight = useHeaderHeight();
  const { error, isLoading, weather, forecast } = useSelector((state) => state);
  const { getWeather } = useWeather();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {error ? (
        <Error getWeather={getWeather} />
      ) : (
        weather &&
        forecast && (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={getWeather} />
            }
          >
            <View
              style={{
                height:
                  windowHeight - headerHeight - (StatusBar.currentHeight || 0),
              }}
            >
              <Today />
              <WeekDays />
            </View>
            <View style={{ height: 50 }}>
              <Text>text</Text>
            </View>
          </ScrollView>
        )
      )}
      {/* {isLoading && <SplashyLoader />} */}
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
