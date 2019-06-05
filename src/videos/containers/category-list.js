import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import Suggestion from '../components/suggestion'
import Separator from '../components/vertical-separator'
import Empty from '../components/empty'

export default class CategoryList extends Component {
  // Render Item
  renderItem = ({item}) => <Suggestion {...item}/>
  // Item Separator Component
  itemSeparator = () => <Separator />
  // Empty component
  listEmpty = () => <Empty text="No hay categorias disponibles"/>
  // Key extractor
  keyExtractor = item => item.id.toString()
  
  render() {
    const { list } = this.props
    return (
      <FlatList 
        horizontal
        data={list}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.itemSeparator}
        ListEmptyComponent={this.listEmpty}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}
