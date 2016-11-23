import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {textColor} from '../common/theme';

const styles = StyleSheet.create({
  container: {
    color: textColor,
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4
  }
});

export default (props) => (
  <Text style={styles.container}>{props.children}</Text>
)
