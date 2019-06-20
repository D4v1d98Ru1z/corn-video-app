// The video reducer must be a pure function 
function videos (state = {}, action) {
  // Switching all the actions
  switch(action.type) {
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_SUGGESTION_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie}
    }
    default:
      return state
  }
}

export default videos