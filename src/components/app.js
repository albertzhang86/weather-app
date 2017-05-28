import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {searchWeather, setLoading} from '../actions';
import SearchBox from './search-box/search-box';
import Location from './location/location.container';
import Condition from './condition/condition.container';
import Forecast from './forecast/forecast.container';
import './app.css';

class App extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(setLoading(true));
    dispatch(searchWeather('Sydney'));
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="row loader">
          <div className="col-xs-offset-0 text-center col-sm-offset-3 col-xs-12 col-sm-6">
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          </div>
        </div>)
    }
    return (
      <div className="row">
        <div className="col-xs-offset-0 col-sm-offset-3 col-xs-12 col-sm-6">
          <SearchBox/>
          <HandleError error={this.props.error}/>
        </div>
      </div>
    )
  }
}

function HandleError({error}) {
  if(error) {
    return (<h4 className="text-center text-danger">no result</h4>)
  } else {
    return (
      <section>
        <Location/>
        <Condition/>
        <Forecast/>
      </section>)
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  const {loading, error} = state;

  return {
    loading, error
  }
}

export default connect(mapStateToProps)(App)