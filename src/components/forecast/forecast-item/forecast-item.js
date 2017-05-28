import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../../weather-icon/weather-icon';
import './forecast-item.css';

const ForecastItem = ({code, date, day, high, low, text}) => (
  <div className="row forecast-item">
    <div className="col-xs-2 col-xs-offset-2">{day}</div>
    <div className="col-xs-2"><WeatherIcon code={code}></WeatherIcon></div>
    <div className="col-xs-2 text-right">{high}°C</div>
    <div className="col-xs-2 low text-right">{low}°C</div>
  </div>
);

ForecastItem.propTypes = {
  code: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ForecastItem