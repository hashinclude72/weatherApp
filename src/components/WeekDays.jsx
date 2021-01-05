import React, { useRef } from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyledTouchableScale } from './StyledComponents';
import { rootNavigation } from '../utils';
import Day from './Day';

export default () => {
  console.log('render weekdays');

  return (
    <Container>
      {[...Array(6)].map((value, index) => (
        <StyledTouchableScale
          key={index}
          onPress={() =>
            rootNavigation.navigate('DayDetails', { index: index + 1 })
          }
        >
          <Day key={index} index={index + 1} />
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
