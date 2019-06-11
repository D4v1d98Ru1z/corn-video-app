import React from 'react'
import { View, Text } from 'react-native'

const Timer = (props) => {
  const{ duration, currentTime } = props
  return (
    <View onProgress={}>
      <Text>{currentTime} / {duration}</Text>
    </View>
  )
}

export default Timer
