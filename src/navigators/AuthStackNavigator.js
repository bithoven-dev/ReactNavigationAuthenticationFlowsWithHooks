import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Login'} component={LoginScreen} />
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
