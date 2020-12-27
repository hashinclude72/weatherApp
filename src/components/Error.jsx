import React, { useEffect, useContext } from 'react';

import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

export default ({ getWeather }) => {
  const error = useSelector((state) => state.error);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (error) {
      Toast.show(error, Toast.SHORT);
    }
  }, [error]);

  return (
    <Container>
      <ErrorText>Something Went Wrong at our End</ErrorText>
      <RetryButton
        onPress={() => getWeather()}
        android_ripple={{
          color: themeContext.colors.buttonPress,
          borderless: false,
        }}
      >
        <RetryText>RETRY</RetryText>
      </RetryButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ErrorText = styled.Text`
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(40)}px;
`;

const RetryButton = styled.Pressable`
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(60)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: ${RFValue(15)}px;
  padding-horizontal: ${RFValue(20)}px;
`;

const RetryText = styled.Text`
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;
