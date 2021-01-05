import React, { memo } from 'react';

import styled from 'styled-components/native';
import { css } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import LottieView from 'lottie-react-native';

import { round, weatherIcons } from '../utils';
import { StyledTouchableScale } from './StyledComponents';

const DayCard = memo(({ index, clicked }) => {
  const forecast = useSelector((state) => state.daily[index]);
  console.log('render daily timeline DayCard : ', index);
  return (
    <Column clicked={clicked}>
      <Header>
        <CardHeading>
          {index === 0
            ? 'Today'
            : index === 1
            ? 'Tomorrow'
            : moment(forecast.dt * 1000).format('dddd')}
        </CardHeading>
        <CardSubHeading>
          {moment(forecast.dt * 1000).format('D/M')}
        </CardSubHeading>
        <WeatherIcon
          source={weatherIcons[forecast.weather[0].icon].animation}
          loop={true}
          autoPlay={true}
          progress={0}
          speed={1}
        />
      </Header>
      <Content>
        <TimeTempBox>
          <Temp>{round(forecast.temp.morn)}&deg;</Temp>
          <Feels>~ {round(forecast.feels_like.morn)}&deg;</Feels>
        </TimeTempBox>
        <TimeTempBox>
          <Temp>{round(forecast.temp.day)}&deg;</Temp>
          <Feels>~ {round(forecast.feels_like.day)}&deg;</Feels>
        </TimeTempBox>
        <TimeTempBox>
          <Temp>{round(forecast.temp.eve)}&deg;</Temp>
          <Feels>~ {round(forecast.feels_like.eve)}&deg;</Feels>
        </TimeTempBox>
        <TimeTempBox>
          <Temp>{round(forecast.temp.night)}&deg;</Temp>
          <Feels>~ {round(forecast.feels_like.night)}&deg;</Feels>
        </TimeTempBox>
      </Content>
    </Column>
  );
});

export default ({ dayClicked, onPress }) => {
  console.log('render daily timeline  : ', dayClicked);
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ColumnFirst>
          <Header />
          <Content>
            <FeatherIcon name="sunrise" />
            <FeatherIcon name="sun" />
            <FeatherIcon name="sunset" />
            <FeatherIcon name="moon" />
          </Content>
        </ColumnFirst>
        {[...Array(8)].map((value, index) => (
          <StyledTouchableScale key={index} onPress={() => onPress(index)}>
            <DayCard key={index} index={index} clicked={dayClicked === index} />
          </StyledTouchableScale>
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  border-radius: ${RFValue(10)}px;
`;

const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
}))``;

const column = css`
  margin-vertical: ${RFValue(20)}px;
  padding-vertical: ${RFValue(20)}px;
`;

const Column = styled.View`
  ${column}
  flex: 1;
  width: ${RFValue(70)}px;
  margin-right: ${RFValue(5)}px;
  border-width: ${({ clicked }) => (clicked ? '2px' : '1px')};
  border-color: ${({ clicked, theme }) =>
    clicked ? theme.colors.primary : theme.colors.border};
  border-radius: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  /* shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: red;
  shadow-offset: 0px 0px;
  overflow: hidden; */
  elevation: ${({ clicked }) => (clicked ? 4 : 0)};
`;

const ColumnFirst = styled.View`
  ${column}
  width: ${RFValue(40)}px;
`;

const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
`;

const Header = styled.View`
  height: ${RFValue(90)}px;
  align-items: center;
`;

const Content = styled.View`
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
`;

const FeatherIcon = styled(Feather).attrs(({ color, theme }) => ({
  size: RFValue(20),
  color: color || theme.colors.icon,
}))`
  text-align: center;
`;

const CardHeading = styled(Text)`
  font-size: ${RFValue(14)}px;
`;

const CardSubHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(12)}px;
`;

const WeatherIcon = styled(LottieView)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  padding-top: ${RFValue(5)}px;
`;

const TimeTempBox = styled.View`
  align-items: center;
  justify-content: center;
`;

const Temp = styled(Text)`
  font-size: ${RFValue(15)}px;
`;

const Feels = styled(Text)`
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.textAlt};
  padding-right: ${RFValue(9)}px;
`;
