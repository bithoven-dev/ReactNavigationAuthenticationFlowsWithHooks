import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsList} from '../screens/ProductsList';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={'ProductsList'} component={ProductsList} />
    </MainStack.Navigator>
  );
}
