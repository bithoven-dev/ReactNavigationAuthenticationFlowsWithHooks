import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './contexts/AuthContext';

const RootStack = createStackNavigator();

export default function() {
  const auth = React.useMemo(
    () => ({
      login: (email, password) => {
        console.log('login', email, password);
      },
      logout: () => {
        console.log('logout');
      },
      register: (email, password) => {
        console.log('register', email, password);
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
