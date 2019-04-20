import { combineReducers } from 'redux';
import { auth } from '../Auth';

const rootReducer = combineReducers({
	authentication: auth
});

export default rootReducer;