import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Suggestion = (props) => {
  const {
    title,
    year,
    rating,
    genres,
    medium_cover_image,
    onPress
  } = props
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Image 
            source={{
              uri: medium_cover_image
            }}
            style={styles.cover}
          />
          <View style={styles.genre}>
            <Text style={styles.genreText}>{genres[0]}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white'
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  }
})

export default Suggestion
