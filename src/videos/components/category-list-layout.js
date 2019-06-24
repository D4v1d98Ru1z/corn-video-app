import React from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'

const CategoryListLayout = (props) => {

  const { title, children } = props

  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      {children} 
    </ImageBackground>
  )
}

// Styles zone
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export default CategoryListLayout