import React, { Component } from 'react'
import { Text } from 'react-native'
// Redux
import { connect } from 'react-redux'
// Sections
import Home from './scenes/containers/home'
import Header from './sections/components/header'
import Movie from './scenes/containers/movie'
import CategoryList from './videos/containers/category-list'
import SuggestionList from './videos/containers/suggestion-list'
// API
import API from '../utils/api'

class AppLayout extends Component {
  async componentDidMount() {
    // Getting the data from API and dispatch the actions
    const suggestionList = await API.getSuggestion(10)
    // Dispatch actions
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    const categoryList = await API.getCategories()
    // Dispatch actions
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })    
  }

  render() {
    return (
      this.props.selectedMovie ? 
      <Movie />
      :
      <Home>
        <Header>
          <Text>NAVIGATION</Text>
        </Header>
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  // Returning the selected movie from the state 
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout)
