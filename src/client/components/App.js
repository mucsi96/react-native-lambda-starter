import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './Register';

export default () => (
  <View style={styles.container}>
    <Register/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
