import { ActionTypes } from "../constants/action-types"

const initialState = {
  left: 0,
  top: 0,
  isOpen: false
}

export const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return payload

    case ActionTypes.CLOSE_MODAL:
      return { ...state, isOpen: false }

    default:
      return state
  }
}