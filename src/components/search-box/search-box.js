import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './search-box.css';
import {searchWeather, setLoading, setSearch} from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const {dispatch, searchText} = this.props;
    if (searchText && searchText.length) {
      dispatch(setLoading(true));
      dispatch(searchWeather(searchText));
    }
  }

  handleInputChange(e) {
    const {dispatch} = this.props;
    dispatch(setSearch(e.target.value));
  }

  render() {
    return (
      <form className="searchForm row" onSubmit={this.handleSearch}>
        <div className="col-xs-9 form-group">
          <input className="form-control" type="text" value={this.props.searchText} onChange={this.handleInputChange} placeholder="Sydney, NSW"/>
        </div>
        <button className="btn btn-primary pull-right col-xs-3" type="submit">Search</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const {searchText} = state;
  return {
    searchText
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App)