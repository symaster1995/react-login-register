import { combineReducers } from 'redux'
import { auth } from '../Auth'
import { userReducer } from '../User'
import { alert } from '../Alert'

const rootReducer = combineReducers({
	alert: alert,
	authentication: auth,
	user: userReducer
})

export default rootReducer