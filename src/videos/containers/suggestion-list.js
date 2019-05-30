import React, { Component } from 'react'
import { 
  Text,
  FlatList,
} from 'react-native'

export default class SuggestionList extends Component {
  render() {
    const list = [
      {
        key: '1',
        title: 'I'
      },
      {
        key: '2',
        title: 'love'
      },
      {
        key: '3',
        title: 'code'
      },
      {
        key: '4',
        title: 'in JS'
      },
    ]
    return (
      <FlatList 
        data={list}
        renderItem={
          ({ item }) => <Text>{item.title}</Text>
        }
      />
    )
  }
}
