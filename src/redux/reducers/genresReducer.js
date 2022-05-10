import { ActionTypes } from "../constants/action-types"

const initialState = {
  genres: []
}

export const genresReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_GENRES:
      return payload
    default:
      return state
  }
}