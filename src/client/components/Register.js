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

const userPool = new CognitoUserPool(poolData);

export default class Register extends Component {
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
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.textbox} value={this.state.username} onChange={this.handleUsernameChange}/>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textbox} value={this.state.email} onChange={this.handleEmailChange}/>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.textbox} value={this.state.password} onChange={this.handlePasswordChange}/>
        <TouchableHighlight style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const LABEL_COLOR = '#000000';
const INPUT_COLOR = '#000000';
const ERROR_COLOR = '#a94442';
const HELP_COLOR = '#999999';
const BORDER_COLOR = '#cccccc';
const DISABLED_COLOR = '#777777';
const DISABLED_BACKGROUND_COLOR = '#eeeeee';
const FONT_SIZE = 17;
const FONT_WEIGHT = '500';

const styles = StyleSheet.create({
  textbox: {
    color: INPUT_COLOR,
    fontSize: FONT_SIZE,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    marginBottom: 5
  },
  label: {
    color: LABEL_COLOR,
    fontSize: FONT_SIZE,
    marginBottom: 7,
    fontWeight: FONT_WEIGHT
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
