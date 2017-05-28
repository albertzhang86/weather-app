import { connect } from 'react-redux';
import LocationComponent from './location.component';

const mapStateToProps = (state) => {
  let {location} = state;
  return {
    location
  }
};

const Location = connect(
  mapStateToProps
)(LocationComponent);

export default Location;