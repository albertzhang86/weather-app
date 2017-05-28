import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FORECAST_SET:
      return setForecast(action);
  }
  return state;
}

function setForecast(action) {
  const { forecast } = action;
  return forecast;
}
