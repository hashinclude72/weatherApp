import React from 'react';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Footer from '../components/Footer';
import DropDownSettings from '../components/DropDownSettings';

export default () => {
  return (
    <Container>
      <DropDownSettings />
      <Footer />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
