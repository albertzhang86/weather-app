import * as actionTypes from '../constants/actionTypes';

export function setLocation(location) {
  return {
    type: actionTypes.LOCATION_SET,
    location
  };
};