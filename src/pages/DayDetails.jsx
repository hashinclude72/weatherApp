import React, { useContext } from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';

import DayDetailsBox from '../components/DayDetailsBox';

export default ({ route }) => {
  const units = useSelector((state) => state.units);
  const themeContext = useContext(ThemeContext);
  const { forecast } = route.params;
  return (
    <Container>
      <DailyTimeline></DailyTimeline>
      <DayDetailsBox forecast={forecast} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const DailyTimeline = styled.View`
  flex-grow: 1;
`;
