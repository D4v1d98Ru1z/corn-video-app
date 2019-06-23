import React, { Component } from 'react'
import { 
  Text,
  FlatList,
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

class SuggestionList extends Component {
  /**
   * Empty component
   * if the list is empty
   */
  listEmpty = () => <Empty text="No hay sugerencias para ti" />
  /**
   *  Separator component - To create a separator in the list
   */
  itemSeparator = () => <Separator />
  /**
   * Function that brings the video from the state
   */
  viewMovie = item => {
    // Dispatch the action of a movie selected
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })
  }
  /**
   * Render Item
   */
  renderItem = ({item}) => (
    <Suggestion 
      {...item} 
      onPress={() => {this.viewMovie(item)}}
    />
  )
  // Key extractor. Which gets the id from API
  keyExtractor = item => item.id.toString()
  render() {
    const { list } = this.props
    return (
      <Layout
        title="Recommended for you"
      >
        <FlatList 
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(SuggestionList)