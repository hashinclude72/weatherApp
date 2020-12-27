import React from 'react';
import { ThemeProvider } from 'styled-components';

const black = {
  primary: '#03a7ff',
  background: '#000',
  backgroundAlt: '#2c2c2c', //1c1c1c
  text: '#d1d1d1',
  textAlt: '#8c8c8c',
  border: '#505050',
  borderAlt: '#000',
  placeholder: '#737373',
  icon: '#d1d1d1',
  headerTint: '#fff',
  buttonPress: '#fff9',
};

const theme = {
  colors: {
    ...black,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
