import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native';
// import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { signUp } from '../common/aws-cognito';
import Header from './Header';
import FormField from './FormField';
import Button from './Button';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleUsernameChange = this.handleChange.bind(this, 'username');
    this.handleEmailChange = this.handleChange.bind(this, 'email');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(type, event) {
    const diff = {}
    diff[type] = event.target.value;
    this.setState({...this.state, ...diff});
  }

  handlePress() {
    signUp(this.state.username, this.state.password, [
      {Name: 'email', Value: this.state.email}
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Register</Header>
        <FormField
          ref="username"
          label="Username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          first={true}
          next={this.refs.email}
        />
        <FormField
          ref="email"
          label="Email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          next={this.refs.password}
        />
        <FormField
          ref="password"
          label="Password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          last={true}
        />
        <View style={styles.buttons}>
          <Button onPress={this.handlePress}>Register</Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 800,
    flex: 1
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  }
});
