import * as actionTypes from '../constants/actionTypes';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADING_SET:
      return setLoading(action);
  }
  return state;
}

function setLoading(action) {
  const { loading } = action;
  return loading;
}