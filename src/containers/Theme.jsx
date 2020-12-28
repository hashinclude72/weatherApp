import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const black = {
  primary: '#03a7ff',
  background: '#000',
  backgroundAlt: '#1c1c1c', //1c1c1c  //2c2c2c
  text: '#d1d1d1',
  textAlt: '#8c8c8c',
  border: '#000',
  borderAlt: '#4b4b4b',
  placeholder: '#737373',
  icon: '#acacac',
  headerTint: '#fff',
  buttonPress: '#fff9',
};

const light = {
  primary: '#03a7ff',
  background: '#e6e6e6',
  backgroundAlt: '#fff', //1c1c1c  //2c2c2c
  text: '#171717',
  textAlt: '#616161',
  border: '#cbcbcb',
  borderAlt: '#989898',
  placeholder: '#737373',
  icon: '#252525',
  headerTint: '#000',
  buttonPress: '#87878799',
};

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const themes = {
    black: black,
    light: light,
  };
  const myTheme = {
    colors: themes[theme],
    theme: theme,
    themeType: theme === 'black' || theme === 'dark' ? 'dark' : 'light',
  };
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default Theme;
