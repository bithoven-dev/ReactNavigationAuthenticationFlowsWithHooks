import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

import {HeaderIconButton} from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContext';
import {UserContext} from '../contexts/UserContext';
import {Product} from '../components/Product';
import {BASE_URL} from '../config';
import {useGet} from '../hooks/useGet';

export function ProductsListScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  React.useLayoutEffect(() => {
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
  const products = useGet('/products');

  function renderProduct({item: product}) {
    return <Product product={product} />;
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
      keyExtractor={product => `${product.id}`}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#fafafa',
  },
  productsListContainer: {
    backgroundColor: '#fafafa',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
