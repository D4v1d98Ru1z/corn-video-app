import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProgressBar = (props) => {
  const{ duration, currentTime } = props
  return (
    <View >
      <Text style={styles.timer}>{currentTime} / {duration} </Text>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontWeight: 'bold',
  }
})

export default ProgressBar
