import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { rootNavigation } from '../utils';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import DayDetails from '../pages/DayDetails';

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);
  const NavigationTheme =
    themeContext.themeType === 'dark' ? DarkTheme : DefaultTheme;
  const theme = {
    ...NavigationTheme,
    colors: {
      ...NavigationTheme.colors,
      primary: themeContext.colors.primary,
      background: 'transparent',
      card: themeContext.colors.background,
      text: themeContext.colors.text,
    },
  };
  return (
    <NavigationContainer ref={rootNavigation.navigationRef} theme={theme}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle={
          themeContext.themeType === 'dark' ? 'light-content' : 'dark-content'
        }
        networkActivityIndicatorVisible
        showHideTransition="fade"
      />
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerPressColorAndroid: themeContext.colors.buttonPress,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: RFValue(18),
          },
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        mode="modal"
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
