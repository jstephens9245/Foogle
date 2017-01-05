import {combineReducers} from 'redux';
import searchReducer from './searchForm-reducer'

export default combineReducers({
  search: searchReducer,
});
