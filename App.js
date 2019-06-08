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
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'
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
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getCategories()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>NAVIGATION</Text>
        </Header>
        <Player />
        <CategoryList 
          list={this.state.categoryList}
        />
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

