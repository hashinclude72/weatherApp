import React, { useState, useEffect } from 'react';

import styled from 'styled-components/native';
import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';

export default () => {
  const lastFetched = useSelector((state) => state.lastFetched);
  const timeFormat = useSelector((state) => state.timeFormat);
  const [currTime, setCurrTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LastFetched>{'Updated ' + moment(lastFetched).fromNow()}</LastFetched>
      {/* <Time>
        {timeFormat === '24'
          ? moment(currTime).format('dddd, D MMM HH:mm')
          : moment(currTime).format('dddd, D MMM h:m a')}
      </Time> */}
    </>
  );
};

const LastFetched = styled.Text`
  justify-content: center;
  padding: ${RFValue(5)}px;
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(10)}px;
  padding-bottom: ${RFValue(20)}px;
`;

const Time = styled.Text`
  justify-content: center;
  padding: ${RFValue(5)}px;
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${RFValue(17)}px;
`;
