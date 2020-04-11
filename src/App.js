import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';

const RootStack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
