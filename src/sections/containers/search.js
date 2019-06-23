import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

class Search extends Component {
  state = {
    text: '',
  }

  handleSubmit = () => {
    // Get the state from handleChangeText
    console.log(this.state.text)
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

export default Search
