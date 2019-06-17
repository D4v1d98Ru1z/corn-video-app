import { createStore } from 'redux'
import reducers from './reducers/videos'

/**
 * Initializing the store withe the reducers, state
 */
const store = createStore(reducers, {
  categoryList: [],
  suggestionList: []
})

export default store