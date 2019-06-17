import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const FullScreen = (props) => {
  const { onPress, fullScreen } = props
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="green"
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}
    >
      {
        fullScreen ?
        <Text style={styles.button}>outscreen</Text>       
        :
        <Text style={styles.button}>fullscreen</Text>
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

export default FullScreen
