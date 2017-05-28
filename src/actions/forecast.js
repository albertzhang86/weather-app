import * as actionTypes from '../constants/actionTypes';

export function setForecast(forecast) {
  return {
    type: actionTypes.FORECAST_SET,
    forecast
  };
}