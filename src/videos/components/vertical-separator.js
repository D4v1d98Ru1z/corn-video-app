import React from 'react'
import { View, StyleSheet } from 'react-native'

const VerticalSeparator = (props) => {
  const {text} = props
  return (
    <View 
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea'
        }
      ]}
    >
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
})

export default VerticalSeparator
