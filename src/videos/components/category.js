import React from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'

const Category = (props) => {
  const { genres, background_image } = props
  return (
    <ImageBackground
      source={{
        uri: background_image
      }}
      style={styles.wrapper}
    >
      {
        genres != null &&
        <Text style={styles.genre}>{genres[0]}</Text>
      }
    </ImageBackground>
  )
}

// Styles
const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
})

export default Category
