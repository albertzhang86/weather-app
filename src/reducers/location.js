import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOCATION_SET:
      return setLocation(action);
  }
  return state;
}

function setLocation(action) {
  const { location } = action;
  return location;
}