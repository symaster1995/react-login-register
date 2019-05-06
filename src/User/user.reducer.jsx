import { userConstants } from '../_constants'

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case userConstants.CREATE_USER:
            return state
        default:
            return state
    }
}