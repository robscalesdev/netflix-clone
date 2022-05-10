import { ActionTypes } from "../constants/action-types"

const initialState = {
  'Trending': [],
  // 'Comedy': [],
  // 'Action': [],

}

export const moviesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      state[payload.genre] = payload.movies
      return {...state}
    default:
      return state
  }
}