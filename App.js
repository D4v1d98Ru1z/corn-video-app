import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';
// Sections
import Home from './src/scenes/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
// API
import API from './utils/api'

// Add different color according to the platform
const txtColor = Platform.select({
  ios: 'green',
  android: 'purple'
})

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    console.log(movies)
    this.setState({
      suggestionList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>NAVIGATION</Text>
        </Header>
        <Text style={styles.text}>Welcome</Text>
        <SuggestionList 
          list={this.state.suggestionList}
        />
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

