import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

export default () => {
  return (
    <Container>
      <View></View>
      <View></View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
