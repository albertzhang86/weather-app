import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CONDITION_SET:
      return setCondition(action);
  }
  return state;
}

function setCondition(action) {
  const { condition } = action;
  return condition;
}