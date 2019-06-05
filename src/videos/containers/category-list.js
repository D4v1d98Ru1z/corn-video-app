import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import Suggestion from '../components/suggestion'
import Separator from '../../sections/components/horizontal-separator'
import Empty from '../components/empty'
import Layout from '../components/category-list-layout'

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
      <Layout
        title="Categorias"
      >
        <FlatList 
          horizontal
          data={list}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}
          ListEmptyComponent={this.listEmpty}
          keyExtractor={this.keyExtractor}
        />
      </Layout>
    )
  }
}
