import React, { useState, useEffect } from 'react';

import styled from 'styled-components/native';
import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';

export default () => {
  const [currTime, setCurrTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Time>{moment(currTime).format('dddd, D MMM h:m a')}</Time>;
};

const Time = styled.Text`
  justify-content: center;
  padding: ${RFValue(5)}px;
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(17)}px;
`;
