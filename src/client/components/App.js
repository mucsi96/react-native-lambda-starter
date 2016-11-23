import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import RegisterForm from './RegisterForm';

export default () => (
  <View style={styles.container}>
    <ScrollView>
      <RegisterForm/>
    </ScrollView>
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
