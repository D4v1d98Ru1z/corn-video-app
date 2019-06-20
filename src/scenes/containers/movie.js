import React, { Component } from 'react'
// Components
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'
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
    const { movie } = this.props
    return (
      <MovieLayout>
        <Header>
          <Close 
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
        <Details {...movie}/>
      </MovieLayout>
    )
  }
}

function mapStateToProps(state) {
  return{
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie)