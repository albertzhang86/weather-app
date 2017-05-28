import React from 'react'
import PropTypes from 'prop-types';
import './location.css';

const LocationComponent = ({ location }) => (
  <h2 className="text-center">
    {`${location.city}, ${location.country}, ${location.region}`}
  </h2>
);

LocationComponent.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    region: PropTypes.string
  }).isRequired
};

export default LocationComponent;