import React, { useContext } from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LottieView from 'lottie-react-native';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';

export default ({ route }) => {
  const units = useSelector((state) => state.units);
  const themeContext = useContext(ThemeContext);
  const { forecast } = route.params;
  return (
    <Container>
      <View>
        <BoxRow>
          <Card>
            <CardContent>
              <CardHeading>UVI</CardHeading>
              <CardSubHeading>{forecast.uvi}</CardSubHeading>
            </CardContent>
            <Fontisto
              name="day-sunny"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
          <Card>
            <CardContent>
              <CardHeading>Wind speed</CardHeading>
              <CardSubHeading>
                {forecast.wind_speed} {units === 'metric' ? 'm/s' : 'mi/h'}
              </CardSubHeading>
            </CardContent>
            <MaterialCommunityIcons
              name="weather-windy"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
        </BoxRow>
        <BoxRow>
          <Card>
            <CardContent>
              <CardHeading>Humidity</CardHeading>
              <CardSubHeading>{forecast.humidity}%</CardSubHeading>
            </CardContent>
            <MaterialCommunityIcons
              name="water-percent"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
          <Card>
            <CardContent>
              <CardHeading>Pressure</CardHeading>
              <CardSubHeading>{forecast.pressure} hPa</CardSubHeading>
            </CardContent>
            <Ionicons
              name="speedometer-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
        </BoxRow>
        <BoxRow>
          <Card>
            <CardContent>
              <CardHeading>Cloud cover</CardHeading>
              <CardSubHeading>{forecast.clouds}%</CardSubHeading>
            </CardContent>
            <Ionicons
              name="cloud-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
          <Card>
            <CardContent>
              <CardHeading>Dew point</CardHeading>
              <CardSubHeading>
                {forecast.dew_point} {units === 'metric' ? '⁰C' : '⁰F'}
              </CardSubHeading>
            </CardContent>
            <Ionicons
              name="water-outline"
              size={RFValue(30)}
              color={themeContext.colors.icon}
            />
          </Card>
        </BoxRow>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const BoxRow = styled.View`
  flex-direction: row;
  height: ${RFValue(60)}px;
`;

const Card = styled.View`
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
