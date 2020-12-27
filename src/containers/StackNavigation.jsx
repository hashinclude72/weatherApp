import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import { rootNavigation } from '../utils';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import DayDetails from '../pages/DayDetails';

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: themeContext.colors.primary,
      background: 'transparent',
      card: themeContext.colors.background,
      text: themeContext.colors.headerTint,
    },
  };
  return (
    <NavigationContainer ref={rootNavigation.navigationRef} theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={themeContext.colors.background}
      />
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        gestureEnabled
        screenOptions={{
          headerPressColorAndroid: themeContext.colors.buttonPress,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="DayDetails"
          component={DayDetails}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
