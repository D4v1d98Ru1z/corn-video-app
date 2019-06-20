import React, { Component } from 'react'
// Components
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
// Redux
import { connect } from 'react-redux'

class Movie extends Component {

  // Set the state in null to close the video
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }

  render() {
    return (
      <MovieLayout>
        <Header>
          <Close 
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
      </MovieLayout>
    )
  }
}

export default connect(null)(Movie)