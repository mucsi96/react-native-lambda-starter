import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {textColor} from '../common/theme';

const styles = StyleSheet.create({
  container: {
    color: textColor,
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomColor: 'rgba(34,36,38,.15)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 3,
    marginBottom: 42
  }
});

export default (props) => (
  <Text style={styles.container}>{props.children}</Text>
)
