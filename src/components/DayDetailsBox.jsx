import React, { useContext } from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';

const Card = ({ heading, sunHeading, icon }) => {
  return (
    <StyledCard>
      <CardContent>
        <CardHeading>{heading}</CardHeading>
        <CardSubHeading>{sunHeading}</CardSubHeading>
      </CardContent>
      {icon}
    </StyledCard>
  );
};

export default ({ forecast }) => {
  const units = useSelector((state) => state.units);
  const themeContext = useContext(ThemeContext);
  const iconSize = RFValue(30);
  return (
    <>
      <BoxRow>
        <Card
          heading="UVI"
          sunHeading={forecast.uvi}
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
          sunHeading={`${forecast.wind_speed} ${
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
          sunHeading={`${forecast.humidity}%`}
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
          sunHeading={`${forecast.pressure} hPa`}
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
          sunHeading={`${forecast.clouds}%`}
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
          sunHeading={`${forecast.dew_point} ${
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
    </>
  );
};

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
