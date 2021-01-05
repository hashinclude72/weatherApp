import React, { useContext, useMemo } from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Card = ({ heading, subHeading, icon }) => {
  return useMemo(() => {
    console.log('render day forecast Deails : ', heading);
    return (
      <StyledCard>
        <CardContent>
          <CardHeading>{heading}</CardHeading>
          <CardSubHeading>{subHeading}</CardSubHeading>
        </CardContent>
        {icon}
      </StyledCard>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subHeading]);
};

export default ({ index }) => {
  const forecast = useSelector((state) => state.daily[index]);
  const timeFormat = useSelector((state) => state.timeFormat);
  const units = useSelector((state) => state.units);
  const themeContext = useContext(ThemeContext);
  const iconSize = RFValue(30);

  const timeString = (sec) => {
    if (timeFormat === '24') return moment(sec * 1000).format('HH:mm');
    return moment(sec * 1000).format('h:m A');
  };

  return (
    <Container>
      <BoxRow>
        <Card
          heading="Sunrise"
          subHeading={timeString(forecast.sunrise)}
          icon={
            <Feather
              name="sunrise"
              size={iconSize}
              color={themeContext.colors.icon}
            />
          }
        />
        <Card
          heading="Sunset"
          subHeading={timeString(forecast.sunset)}
          icon={
            <Feather
              name="sunset"
              size={iconSize}
              color={themeContext.colors.icon}
            />
          }
        />
      </BoxRow>
      <BoxRow>
        <Card
          heading="UVI"
          subHeading={forecast.uvi}
          icon={
            <Fontisto
              name="day-sunny"
              size={iconSize}
              color={themeContext.colors.icon}
            />
          }
        />
        <Card
          heading="Wind speed"
          subHeading={`${forecast.wind_speed} ${
            units === 'metric' ? 'm/s' : 'mi/h'
          }`}
          icon={
            <MaterialCommunityIcons
              name="weather-windy"
              size={iconSize}
              color={themeContext.colors.icon}
            />
          }
        />
      </BoxRow>
      <BoxRow>
        <Card
          heading="Humidity"
          subHeading={`${forecast.humidity}%`}
          icon={
            <MaterialCommunityIcons
              name="water-percent"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          }
        />
        <Card
          heading="Pressure"
          subHeading={`${forecast.pressure} hPa`}
          icon={
            <Ionicons
              name="speedometer-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          }
        />
      </BoxRow>
      <BoxRow>
        <Card
          heading="Cloud cover"
          subHeading={`${forecast.clouds}%`}
          icon={
            <Ionicons
              name="cloud-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          }
        />
        <Card
          heading="Dew point"
          subHeading={`${forecast.dew_point} ${
            units === 'metric' ? '⁰C' : '⁰F'
          }`}
          icon={
            <Ionicons
              name="water-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          }
        />
      </BoxRow>
    </Container>
  );
};

const Container = styled.View`
  margin: ${RFValue(20)}px;
  margin-top: 0px;
`;

const BoxRow = styled.View`
  flex-direction: row;
  height: ${RFValue(60)}px;
`;

const StyledCard = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(2)}px;
  border-radius: ${RFValue(10)}px;
  border: 1px ${({ theme }) => theme.colors.border};
  padding-horizontal: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const CardContent = styled.View``;

const CardHeading = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

const CardSubHeading = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
`;
