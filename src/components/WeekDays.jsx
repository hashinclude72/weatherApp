import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';

import { StyledTouchableScale } from './StyledComponents';
import { rootNavigation } from '../utils';
import Day from './Day';

export default () => {
  const [today] = useState(moment().format('dddd'));
  const [dayNames, setDayNames] = useState();

  const forecast = useSelector((state) => state.forecast);

  useEffect(() => {
    let weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let dayNo = weekDays.indexOf(today);
    let day = '';
    while (dayNo >= 0) {
      day = weekDays.shift();
      weekDays.push(day);
      dayNo--;
    }
    weekDays = weekDays.slice(0, 5);
    setDayNames(weekDays);
  }, [today]);

  return (
    <Container>
      {dayNames &&
        dayNames.map((day, index) => (
          <StyledTouchableScale
            key={index}
            onPress={() =>
              rootNavigation.navigate('DayDetails', {
                forecast: forecast.daily[index + 1],
              })
            }
          >
            <Day day={day} forecast={forecast.daily[index + 1]} />
          </StyledTouchableScale>
        ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  margin: ${RFValue(10)}px;
  margin-top: 0px;
`;
