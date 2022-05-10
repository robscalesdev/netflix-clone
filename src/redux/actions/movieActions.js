import { ActionTypes } from "../constants/action-types"

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies
  }
}

export const selectMovie = (movie) => {
  return {
    type: ActionTypes.SELECT_MOVIE,
    payload: movie
  }
}