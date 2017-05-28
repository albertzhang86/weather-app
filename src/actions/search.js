import * as actionTypes from '../constants/actionTypes';
import {setCondition, setForecast, setLoading, setError, setLocation} from './index';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/dom/ajax';


export function searchWeather(searchText) {
  return {
    type: actionTypes.SEARCH_WEATHER,
    searchText
  };
}

export function setSearch(searchValue) {
  return {
    type: actionTypes.SEARCH_SET,
    searchValue
  };
}

export const fetchWeatherEpic = (action$) =>
  action$.ofType(actionTypes.SEARCH_WEATHER)
    .switchMap((action) => {
        return Observable.ajax({
          crossDomain: true,
          method: 'get',
          url: getUrl(action.searchText)
        })
          .flatMap(({response}) => setWeather(response));
      }
    ).catch(error => Observable.of(setError(true), setLoading(false)));

function getUrl(searchText) {
  let query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${searchText}')and u='c'`;
  return `/yql?q=${query}&format=json`;
}

function setWeather(response) {
  if (response.query.results) {
    return [
      setLoading(false),
      setError(false),
      setLocation(response.query.results.channel.location),
      setCondition(response.query.results.channel.item.condition),
      setForecast(response.query.results.channel.item.forecast)]
  } else {
    return [setError(true), setLoading(false)];
  }
}