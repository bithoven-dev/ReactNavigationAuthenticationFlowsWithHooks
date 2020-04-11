import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';

export function LoginScreen({navigation}) {
  return (
    <AuthContainer>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {}}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
