import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './contexts/AuthContext';
import {BASE_URL} from './config';
import {sleep} from './utils/sleep';
import {createAction} from './config/createAction';
import {MainStackNavigator} from './navigators/MainStackNavigator';

const RootStack = createStackNavigator();

export default function() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        const {data} = await axios.post(`${BASE_URL}/auth/local`, {
          identifier: email,
          password,
        });
        const user = {
          email: data.user.email,
          token: data.jwt,
        };
        dispatch(createAction('SET_USER', user));
      },
      logout: () => {
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/auth/local/register`, {
          username: email,
          email,
          password,
        });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{auth, user: state.user}}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          {state.user ? (
            <RootStack.Screen
              name={'MainStack'}
              component={MainStackNavigator}
            />
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
