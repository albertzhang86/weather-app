import * as actionTypes from '../constants/actionTypes';

export function setLoading(loading) {
  return {
    type: actionTypes.LOADING_SET,
    loading
  };
}