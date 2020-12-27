import React from 'react';

import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default () => (
  <Container>
    <Loader
      source={require('../lotties/weather-loader.json')}
      loop={true}
      autoPlay={true}
      progress={0}
      speed={3}
    />
  </Container>
);

const Container = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: '100%';
  margin: auto;
  padding-top: 10px;
  background-color: transparent;
`;

const Loader = styled(LottieView)`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;
