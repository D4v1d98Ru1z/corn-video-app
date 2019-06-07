import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video'
// Sections
import Home from './src/scenes/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
// API
import API from './utils/api'

// Add different color according to the platform
const txtColor = Platform.select({
  ios: 'green',
  android: 'purple'
})

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getCategories()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>NAVIGATION</Text>
        </Header>
        <View
          style={{
            flex: 1,
            height: 100,
          }}
        >
          {
            //ResizeMode allows me to have a full size in the screen for android devices
          }
          <Video 
            source={{
              uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            resizeMode='contain'
          />
        </View>
        <CategoryList 
          list={this.state.categoryList}
        />
        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  text: {
    color: txtColor
  }
})

