import React, { Component } from 'react'
import { 
  Text,
  FlatList,
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

export default class SuggestionList extends Component {
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
   * Render Item
   */
  renderItem = ({item}) => (
    <Suggestion {...item} />
  )
  render() {
    // List
    const list = [
      {
        key: '1',
        title: 'Avengers'
      },
      {
        key: '2',
        title: 'Spiderman far from home'
      },
      {
        key: '3',
        title: 'Game of Thrones'
      },
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList 
          data={list}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}
