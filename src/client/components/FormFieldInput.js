import React, {  Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput
} from 'react-native';
import {textColor} from '../common/theme';

const styles = StyleSheet.create(Platform.OS === 'web' ? {
  container: {
    color: textColor,
    fontSize: 14,
    paddingBottom: 9.5,
    paddingTop: 9.5,
    paddingLeft: 14,
    paddingRight: 14,
    borderColor: 'rgba(34,36,38,.15)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    marginBottom: 4,

  }
} : {
  container: {}
});

export default class FormFieldInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };


    this.onChange = this.onChange.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value })
    if (this.props.onChange) this.props.onChange(event);
  }

  onSubmitEditing (event) {
    console.log(this.props.next);
    this.props.next && this.props.next.focus();
  }

  focus () {
    this.refs.textInput.focus();
  }

  render() {
    return (
      <TextInput
        ref = "textInput"
        placeholder = {this.props.placeholder}
        placeholderTextColor = "rgba(0,0,0,0.4)"
        style = {styles.container}
        value = {this.state.value}
        onChange = {this.onChange}
        returnKeyType = {this.props.last ? 'done' : 'next'}
        autoFocus = {this.props.first}
        onSubmitEditing= {this.onSubmitEditing}
      />
    )
  }
}
