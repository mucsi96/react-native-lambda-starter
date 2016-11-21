import React, {  Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {textColor} from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CACBCD',
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 4
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)'
  }
});

export default (props) => (
  <TouchableHighlight style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{props.children}</Text>
  </TouchableHighlight>
)
