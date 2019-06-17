import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import Category from '../components/category'
import Separator from '../../sections/components/horizontal-separator'
import Empty from '../components/empty'
import Layout from '../components/category-list-layout'
import { connect } from 'react-redux'

/**
 * Map State to Props function selects parts of the Redux state and passes it in 
 * as props to the component that connect() is applied to. 
 * That means that the structure of the state that your component gets, 
 * is not the same structure as the Redux state.
 * @param {Object} state 
 */
function mapStateToProps(state) {
  return {
    list: state.categoryList
  }
}

class CategoryList extends Component {
  // Render Item
  renderItem = ({item}) => <Category {...item}/>
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

export default connect(mapStateToProps) (CategoryList)