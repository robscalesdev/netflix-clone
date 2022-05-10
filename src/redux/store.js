import { createStore } from "redux";
import reducers from './reducers'

const initState = {}

const store = createStore(reducers, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
