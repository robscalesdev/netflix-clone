import { ActionTypes } from "../constants/action-types"

export const openModal = (tile) => {
  // need to pass in which movie to open the modal over as x and y coordinates...?
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: tile
  }
}

export const closeModal = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
    payload: false
  }
}