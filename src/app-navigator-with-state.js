import React, { Component } from 'react'
import { connect } from 'react-redux'

// React navigation helper
import { createReduxBoundAddListener, initializeListeners } from 'react-navigation-redux-helpers'

import AppNavigator from './app-navigator'

// Listen everything that comes in 'root'
const addListener = createReduxBoundAddListener('root')

export class AppNavigatorWithState extends Component {

  componentDidMount() {
    // initialize the listeners
    initializeListeners('root', this.props.navigation)
  }

  render() {
    const navigation = {
      dispatch: this.props.dispatch,
      state: this.props.navigation,
      addListener,
    }

    return (
      <AppNavigator 
        navigation={navigation}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  }
}

export default connect(mapStateToProps) (AppNavigatorWithState)
