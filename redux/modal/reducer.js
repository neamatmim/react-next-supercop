import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

// REDUCERS
const initialState = {
  isVisible: false,
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return updateObject(state, { isVisible: true });
    case actionTypes.CLOSE_MODAL:
      return updateObject(state, { isVisible: false });
    default:
      return state;
  }
};
