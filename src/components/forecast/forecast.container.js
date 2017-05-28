import { connect } from 'react-redux';
import ForecastComponent from './forecast.component';

const getVisibleForecast = (forecast) => {
  return forecast.filter((item, index) => index < 5);
};

const mapStateToProps = (state) => {
  return {
    forecastList: getVisibleForecast(state.forecast)
  }
};

const Forecast = connect(
  mapStateToProps
)(ForecastComponent);

export default Forecast;