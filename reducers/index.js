import { combineReducers } from 'redux';
import musicReducer from './music';
import authReducer from './auth';
const reducer = combineReducers({
  music: musicReducer,
  auth: authReducer,
});

export default reducer;
