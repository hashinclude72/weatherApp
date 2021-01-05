import React, { useMemo } from 'react';

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { round, weatherIcons } from '../utils';

export default ({ index }) => {
  const forecast = useSelector((state) => state.daily[index]);
  return useMemo(() => {
    console.log('render day : ', index);
    return (
      <Container>
        <DayIcon>
          <WeatherIcon
            source={weatherIcons[forecast.weather[0].icon].animation}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={1}
          />
          <DayText>{moment(forecast.dt * 1000).format('dddd')}</DayText>
        </DayIcon>
        <WeatherTemp>
          <WeatherText>{forecast.weather[0].main}</WeatherText>
          <TempText>
            {round(forecast.temp.max)}&deg; / {round(forecast.temp.min)}&deg;
          </TempText>
        </WeatherTemp>
      </Container>
    );
  }, [forecast]);
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  border: 1px ${({ theme }) => theme.colors.border};
  margin-top: ${RFValue(7)}px;
  padding-horizontal: ${RFValue(15)}px;
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
  elevation: 4;
`;

const text = css`
  color: ${({ theme }) => theme.colors.text};
`;

const DayText = styled.Text`
  ${text}
  margin-left: ${RFValue(15)}px;
  font-size: ${RFValue(25)}px;
`;

const WeatherTemp = styled.View`
  height: 100%;
  justify-content: center;
`;

const WeatherText = styled.Text`
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(12)}px;
`;

const TempText = styled.Text`
  ${text}
  font-size: ${RFValue(15)}px;
`;
