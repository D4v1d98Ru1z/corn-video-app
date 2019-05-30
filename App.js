import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';
// Sections
import Home from './src/scenes/containers/home'
import Header from './src/sections/components/header'

// Add different color according to the platform
const txtColor = Platform.select({
  ios: 'green',
  android: 'purple'
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>NAVIGATION</Text>
        </Header>
        <Text style={styles.text}>Welcome</Text>
      </Home>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  text: {
    color: txtColor
  }
})

