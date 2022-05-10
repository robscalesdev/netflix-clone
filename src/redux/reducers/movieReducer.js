import { ActionTypes } from "../constants/action-types"

const initialState = {
  movie: {
    id: 0,
    title: '',
    link: '',
  }
}

export const movieReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SELECT_MOVIE:
      return payload
    default:
      return state
  }
}