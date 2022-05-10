import { combineReducers } from 'redux'
import { modalReducer } from './modalReducer'
import { moviesReducer } from './moviesReducer'
import { movieReducer } from './movieReducer'
import { genresReducer } from './genresReducer'

const reducers = combineReducers({
  modalState: modalReducer,
  genresState: genresReducer,
  moviesState: moviesReducer,
  movieState: movieReducer
})

export default reducers