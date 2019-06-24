import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Close = props => {
  const{ onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDD835',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Close