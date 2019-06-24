import React, {Component} from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
// Components
import AppLayout from './src/app'
import Loading from './src/sections/components/loading'

// Redux
import { Provider } from 'react-redux'
import { store, persistor } from './store'
// Redux Persistor
import { PersistGate } from 'redux-persist/integration/react'

// Add different color according to the platform
const txtColor = Platform.select({
  ios: 'green',
  android: 'purple'
})

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  text: {
    color: txtColor
  }
})

