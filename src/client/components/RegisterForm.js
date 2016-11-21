import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import poolData from '../../../.aws-resources/cognito-user-pool.json';
import Header from './Header';
import FormField from './FormField';
import Button from './Button';

const userPool = new CognitoUserPool(poolData);

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
    const attributes = [
      new CognitoUserAttribute({
        Name : 'email',
        Value : this.state.email
      })
    ];
    userPool.signUp(this.state.username, this.state.password, attributes, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        const cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Register</Header>
        <FormField label="Username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/>
        <FormField label="Email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
        <FormField label="Password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
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
