import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const suggestionListLayout = (props) => {

  const { title, children } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

// Styles zone
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 10,
  }
})

export default suggestionListLayout