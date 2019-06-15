import React from 'react'
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native'

const ProgressBar = (props) => {
  const{ duration, currentTime, progress } = props
  return (
    <View>
      <ProgressBarAndroid 
        color="green" 
        indeterminate={false}
        styleAttr="Horizontal"
        progress={progress}
        animating={true}
        style={styles.progressBarAndroid}
      />
      <View>
        <Text style={styles.timer}>{currentTime} / {duration} </Text>
      </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBarAndroid: {
    width: 240
  }
})

export default ProgressBar
