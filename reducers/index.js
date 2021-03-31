import { combineReducers } from 'redux';
import musicReducer from './music';
import authReducer from './auth';
import errorReducer from './error';
const reducer = combineReducers({
  music: musicReducer,
  auth: authReducer,
  error: errorReducer,
});

export default reducer;
