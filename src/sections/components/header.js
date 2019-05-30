import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native'


const Header = (props) => {
  const { children } = props

  return (
    <View>
      {
        /**
         * SafeAreaView render the component in a safe area. 
         * This issue is very common in notch screens.
         */
      }
      <SafeAreaView>
        <View style={styles.container}>
          <Image 
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

// Styles section
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  }
})

export default Header
