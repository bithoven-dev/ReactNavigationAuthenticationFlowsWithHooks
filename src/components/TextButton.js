import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: 'purple',
    fontWeight: '500',
    fontSize: 14,
  },
});
