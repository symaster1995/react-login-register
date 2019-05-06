import { userConstants, alertConstants } from '../_constants'
import { userService } from './user.service'
import { alertActions } from '../Alert'

const createUser = data => {
    return dispatch => {
        userService.createUser(data)
        .then(
            account => {
                dispatch(alertActions.success(account.message))
            },
            error => {
                dispatch(alertActions.error(error.message))
            }
        )
    }
}

export const userActions = {
    createUser
}