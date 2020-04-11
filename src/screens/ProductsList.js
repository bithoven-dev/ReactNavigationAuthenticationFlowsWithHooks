import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContext';

export function ProductsList({navigation}) {
  const {
    auth: {logout},
    user,
  } = React.useContext(AuthContext);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton
          name={'log-out'}
          onPress={() => {
            logout();
          }}
        />
      ),
    });
  }, [navigation, logout]);

  return (
    <View style={styles.container}>
      <Text>Welcome to the products list</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
