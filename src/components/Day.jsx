import React from 'react';
import { View } from 'react-native';

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

import { round, weatherIcons } from '../utils';

export default ({ day, forecast }) => {
  return (
    <Container>
      <DayIcon>
        <WeatherIcon
          source={weatherIcons[forecast.weather[0].icon]}
          loop={true}
          autoPlay={true}
          progress={0}
          speed={1}
        />
        <DayText>{day}</DayText>
      </DayIcon>
      <View>
        <WeatherText>{forecast.weather[0].main}</WeatherText>
        <TempText>
          {round(forecast.temp.max)}&deg; / {round(forecast.temp.min)}&deg;
        </TempText>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  border: 1px ${({ theme }) => theme.colors.border};
  margin-bottom: ${RFValue(7)}px;
  padding-horizontal: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const DayIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WeatherIcon = styled(LottieView)`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

const text = css`
  color: ${({ theme }) => theme.colors.text};
`;

const DayText = styled.Text`
  ${text}
  margin-left: ${RFValue(15)}px;
  font-size: ${RFValue(25)}px;
`;

const WeatherText = styled.Text`
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(12)}px;
`;

const TempText = styled.Text`
  ${text}
  font-size: ${RFValue(15)}px;
`;
