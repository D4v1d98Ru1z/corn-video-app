import React, { Component } from 'react'
// Components
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'

export default class movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Player />
      </MovieLayout>
    )
  }
}
