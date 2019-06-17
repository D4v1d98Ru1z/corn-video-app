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
// Redux
import { Provider } from 'react-redux'
import store from './store'

// Add different color according to the platform
const txtColor = Platform.select({
  ios: 'green',
  android: 'purple'
})

type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: []
  }
  async componentDidMount() {
    // Getting the data from API and dispatch the actions
    const suggestionList = await API.getSuggestion(10)
    // Dispatch actions
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    const categoryList = await API.getCategories()
    // Dispatch actions
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })    
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header>
            <Text>NAVIGATION</Text>
          </Header>
          <Player />
          <CategoryList 
            // list={this.state.categoryList}
          />
          <SuggestionList 
            // list={this.state.suggestionList}
          />
        </Home>
      </Provider>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  text: {
    color: txtColor
  }
})

