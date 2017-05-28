import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../weather-icon/weather-icon';
import './condition.css';

const ConditionComponent = ({code, date, temp, text}) => (
  <div className="row condition">
    <div className="col-xs-12">
      <div className="row weather text-center">
        <div className="col-xs-offset-3 col-xs-3">
          <WeatherIcon code={code}></WeatherIcon>
        </div>
        <div className="col-xs-3">
          <span className="weatherTemperature">{temp}°C</span></div>
      </div>
      <div className="row info">
        <div className="col-xs-12">
          <h4 className="text-center">{text}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 date">
          <h4 className="text-center">{date}</h4>
        </div>
      </div>
    </div>
  </div>
);

ConditionComponent.propTypes = {
  code: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  text: PropTypes.string
};
export default ConditionComponent;