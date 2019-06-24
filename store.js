import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/videos'

/**
 * Initializing the store withe the reducers, state
 * 
 * -Old store-
  const store = createStore(reducer, {
    categoryList: [],
    suggestionList: []
  })
*/

// Store persisted
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }