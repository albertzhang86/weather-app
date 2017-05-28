import * as actionTypes from '../constants/actionTypes';

const initialState = '';

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SET:
      return setSearchValue(action);
  }
  return state;
}

function setSearchValue(action) {
  const { searchValue } = action;
  return searchValue;
}