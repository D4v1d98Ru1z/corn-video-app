import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const Volume = (props) => {
  const {
    onPress,
    volume,
    muted
  } = props
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#FDD835"
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}
    >
      {
        muted ? 
        <Text style={styles.button}>unmute</Text>
        :
        volume === .5 ?
        <Text style={styles.button}>Down</Text>
        :
        <Text style={styles.button}>Up</Text>
      }
    </TouchableHighlight>
  )
}

// Styles
const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default Volume


