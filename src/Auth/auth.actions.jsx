import { authConstants } from '../_constants'
import { alertActions } from '../Alert'
import { authService } from './auth.service'

const login = (username, password) => {

    return dispatch => {
        authService.login(username, password)
            .then(
                user => {
                    dispatch({ type: authConstants.AUTHENTICATED })
                    dispatch(alertActions.clear())
                },
                error => {
                    dispatch(alertActions.error(error.message))
                }
            )
    }
}

const logout = () => {
    return dispatch => {
        authService.logout()
            .then(
                user => {
                    dispatch({ type: authConstants.UNAUTHENTICATED })
                },
                error => {
                    console.log(error)
                }
            )
    }
}

export const authActions = {
    login,
    logout
}