/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import Home from './src/scenes/containers/home'

const bntColor = Platform.select({
  ios: 'green',
  android: 'yellow'
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text style={styles.text}>Welcome</Text>
      </Home>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: bntColor
  }
})

