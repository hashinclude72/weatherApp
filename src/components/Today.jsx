import React, { useContext, useMemo } from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';

import IconI from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components';
import LiveTime from './LiveTime';
import { StyledTouchableScale } from './StyledComponents';
import { round, weatherIcons, rootNavigation } from '../utils';

const SettingsIcon = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <SettingsContainer
      android_ripple={{
        color: themeContext.colors.buttonPress,
        borderless: true,
        radius: RFValue(22),
      }}
      onPress={() => rootNavigation.navigate('Settings')}
    >
      <IconI
        name="settings-sharp"
        size={RFValue(25)}
        color={themeContext.colors.icon}
      />
    </SettingsContainer>
  );
};

export default () => {
  const weather = useSelector((state) => state.weather);

  return useMemo(() => {
    console.log('render today');
    return (
      <Container>
        <StyledTouchableScale
          onPress={() => rootNavigation.navigate('DayDetails', { index: 0 })}
        >
          <Today>
            <LiveTime />
            <IconContainer>
              <WeatherIcon
                source={weatherIcons[weather.weather[0].icon].animation}
                loop={true}
                autoPlay={true}
                progress={0}
                speed={1}
              />
              <BaseText>{round(weather.main.temp)}&deg;</BaseText>
            </IconContainer>
            <LocationText>{weather.name}</LocationText>
            <FeelsText>
              Feels Like {round(weather.main.feels_like)}&deg;
            </FeelsText>
            <WeatherText>{weather.weather[0].main}</WeatherText>
          </Today>
        </StyledTouchableScale>
        <SettingsIcon />
      </Container>
    );
  }, [weather]);
};

const Container = styled.View`
  flex: 1;
`;

const Today = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WeatherIcon = styled(LottieView)`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;

const BaseText = styled.Text`
  justify-content: center;
  padding: ${RFValue(5)}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(70)}px;
`;

const LocationText = styled(BaseText)`
  font-size: ${RFValue(30)}px;
`;

const FeelsText = styled(BaseText)`
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(13)}px;
`;

const WeatherText = styled(BaseText)`
  font-size: ${RFValue(17)}px;
`;

const SettingsContainer = styled.Pressable`
  position: absolute;
  right: ${RFValue(20)}px;
  bottom: ${RFValue(0)}px;
  border-radius: 50px;
  padding: ${RFValue(7)}px;
`;
