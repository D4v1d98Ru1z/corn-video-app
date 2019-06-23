import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
// Redux
import { connect } from 'react-redux'
// API
import API from '../../../utils/api'

class Search extends Component {
  state = {
    text: '',
  }

  // Submit the movie fetched from the API and dispatch the action
  handleSubmit = async () => {
    // Get the state from handleChangeText
    const movies = await API.searchMovie(this.state.text)
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    })
  }

  /**
   * @param {string} text Get the text from the input
   */
  handleChangeText = text => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <TextInput 
        style={styles.input}
        placeholder="Search your favorite movie"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
      />
    )
  }
}

// Styles
const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  },
})

export default connect(null)(Search)
