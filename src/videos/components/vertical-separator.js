import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
      <Text>Separador</Text>
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
