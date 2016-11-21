import React, {  Component } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import {textColor} from '../theme';

const styles = StyleSheet.create({
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
});

export default class FormFieldInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value })
    if (this.props.onChange) this.props.onChange(event);
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        placeholderTextColor="rgba(0,0,0,0.4)"
        style={styles.container}
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}
