import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast-item/forecast-item';

const ForecastComponent = ({forecastList}) => (
  <section className="center-block">
    {forecastList.map((item, index) =>
      <ForecastItem
        key={index}
        {...item}
      />
    )}
  </section>
);

ForecastComponent.propTypes = {
  forecastList: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default ForecastComponent;