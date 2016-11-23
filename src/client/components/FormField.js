import React, {  Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import {textColor} from '../common/theme';
import FormFieldLabel from './FormFieldLabel';
import FormFieldInput from './FormFieldInput';

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  }
});

export default class extends Component {
  constructor(props) {
    super(props);
  }

  focus () {
    this.refs.formFieldInput.focus();
  }

  render () {
    return (
      <View style={Platform.OS === 'web' && styles.container}>
        { Platform.OS === 'web' && <FormFieldLabel>{this.props.label}</FormFieldLabel> }
        <FormFieldInput
          ref = 'formFieldInput'
          id = {this.props.id}
          placeholder = {this.props.placeholder}
          value = {this.props.value}
          onChange = {this.props.onChange}
          first = {this.props.first}
          last = {this.props.last}
          next = {this.props.next}
        />
      </View>
    )
  }
}



