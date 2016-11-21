import React, {  Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {textColor} from '../theme';
import FormFieldLabel from './FormFieldLabel';
import FormFieldInput from './FormFieldInput';

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  }
});

export default (props) => (
  <View style={styles.container}>
    <FormFieldLabel>{props.label}</FormFieldLabel>
    <FormFieldInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </View>
)
