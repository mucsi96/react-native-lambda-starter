import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import RegisterForm from './RegisterForm';

export default () => (
  <View style={styles.container}>
    <RegisterForm/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
