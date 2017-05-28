import { combineReducers } from 'redux';
import condition from './condition';
import location from './location';
import forecast from './forecast';
import loading from './loading';
import searchText from './search-text';
import error from './error';

export default combineReducers({
  location,
  condition,
  forecast,
  loading,
  searchText,
  error
});