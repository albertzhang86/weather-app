import * as actionTypes from '../constants/actionTypes';

export function setCondition(condition) {
  return {
    type: actionTypes.CONDITION_SET,
    condition
  };
};