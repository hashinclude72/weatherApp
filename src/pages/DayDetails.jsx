import React, { useState } from 'react';

import styled from 'styled-components/native';

import DailyTimeline from '../components/DailyTimeline';
import DayForecastDetails from '../components/DayForecastDetails';

export default ({ route }) => {
  const { index } = route.params;
  const [dayClicked, setDayClicked] = useState(index);
  console.log('render day details ');
  return (
    <Container>
      <DailyTimeline dayClicked={dayClicked} onPress={setDayClicked} />
      <DayForecastDetails index={dayClicked} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
