import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App';

class ReactNativeWeb extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
