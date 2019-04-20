import { authConstants } from '../_constants';

export const auth = (state = {}, action) =>{
	switch(action.type) {
		case authConstants.AUTHENTICATED:
			return { ...state, authenticated: true };
		case authConstants.UNAUTHENTICATED:
			return { ...state, authenticated: false };
		case authConstants.AUTHENTICATION_ERROR:
			return { ...state, error: action.payload };
		case authConstants.LOGOUT:
			return {};
		default:
      		return state
	}
	return state;
}