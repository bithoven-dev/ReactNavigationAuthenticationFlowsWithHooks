import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './contexts/AuthContext';
import {MainStackNavigator} from './navigators/MainStackNavigator';
import {useAuth} from './hooks/useAuth';
import {UserContext} from './contexts/UserContext';

const RootStack = createStackNavigator();

export default function() {
  const {auth, state} = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          {state.user ? (
            <RootStack.Screen name={'MainStack'}>
              {() => (
                <UserContext.Provider value={state.user}>
                  <MainStackNavigator />
                </UserContext.Provider>
              )}
            </RootStack.Screen>
          ) : (
            <RootStack.Screen
              name={'AuthStack'}
              component={AuthStackNavigator}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
