import {setCondition} from './condition';
import {setLocation} from './location';
import {setForecast} from './forecast';
import {setLoading} from './loading';
import {setError} from './error';
import {fetchWeatherEpic, searchWeather, setSearch} from './search';
import {combineEpics} from 'redux-observable';

const rootEpic = combineEpics(
  fetchWeatherEpic,
);

export {
  setLocation,
  setCondition,
  setForecast,
  setLoading,
  searchWeather,
  setSearch,
  setError,
  rootEpic
};