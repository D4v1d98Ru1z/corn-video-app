import React from 'react'
import { 
  View,
  StyleSheet,
  Image,
  ActivityIndicator 
} from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <ActivityIndicator 
        size="large"
        color="#FDD835"
      />
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
})

export default Loading
