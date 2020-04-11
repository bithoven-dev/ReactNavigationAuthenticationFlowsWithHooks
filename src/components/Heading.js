import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function Heading({children, style, ...props}) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: 'black',
  },
});
