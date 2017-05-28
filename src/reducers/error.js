import * as actionTypes from '../constants/actionTypes';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ERROR_SET:
      return setError(action);
  }
  return state;
}

function setError(action) {
  const { error } = action;
  return error;
}