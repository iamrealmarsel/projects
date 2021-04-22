import {combineReducers} from 'redux';
import movies from 'store/reducers/movies';
import load from 'store/reducers/load';
import user from 'store/reducers/user';


export default combineReducers({
  load,
  movies,
  user,
});
