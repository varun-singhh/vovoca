import { combineReducers } from 'redux'
import musicReducer from './music'
const reducer = combineReducers({
    music: musicReducer,
})

export default reducer