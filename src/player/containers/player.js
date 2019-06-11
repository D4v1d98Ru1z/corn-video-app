import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Layout from '../components/layout'
import Video from 'react-native-video'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'

export default class Player extends Component {
  state = {
    loading: true,
    paused: false
  }

  /**
   * On buffer event determines if the video stops loading
   * @param {boolean} buffer of the video
   */
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  /**
   * on load event gets if the video is already loaded
   */
  onLoad = () => {
    this.setState({
      loading: false,
    })
  }

  // Change the state of the play and paused button
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render() {
    //ResizeMode allows me to have a full size in the screen for android devices
    return (
      <Layout 
        loading={this.state.loading}
        video={
          <Video 
            source={{
              uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style={styles.video}
            resizeMode='contain'
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={
          <ActivityIndicator />
        }
        controls={
          <ControlLayout >
            <PlayPause 
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>progress bar | </Text>
            <Text>time left | </Text>
            <Text>fullscreen | </Text>
          </ControlLayout>
        }
      />
    )
  }
}

// Styles
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})