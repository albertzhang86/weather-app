import * as actionTypes from '../constants/actionTypes';

export function setError(error) {
  return {
    type: actionTypes.ERROR_SET,
    error
  };
}