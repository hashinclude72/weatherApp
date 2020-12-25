import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Settings from './Settings';
import { RootNavigation } from '../utils';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        gestureEnabled
        cardShadowEnabled={true}
        cardOverlayEnabled={true}
        cardStyle={{ backgroundColor: 'transparent' }}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerPressColorAndroid: '#8c8c8c',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
