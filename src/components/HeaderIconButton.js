import React from 'react';
import {StyleSheet} from 'react-native';

import {IconButton} from './IconButton';

export function HeaderIconButton({name, onPress}) {
  return <IconButton name={name} style={styles.container} onPress={onPress} />;
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});
