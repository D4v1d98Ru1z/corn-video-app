import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
// Components
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'
// Redux
import { connect } from 'react-redux'

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  // Set the state in null to close the video
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }

  componentDidMount() {
    // animates a value over time using easing functions
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start()
  }

  render() {
    const { movie } = this.props
    const {animated} = styles
    return (
      <Animated.View
        style={{ 
          animated,
          opacity: this.state.opacity
        }}
      >
        <MovieLayout>
          <Header>
            <Close 
              onPress={this.closeVideo}
            />
          </Header>
          <Player />
          <Details {...movie}/>
        </MovieLayout>
      </Animated.View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  animated: {
    flex: 1,
  },
})

function mapStateToProps(state) {
  return{
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie)