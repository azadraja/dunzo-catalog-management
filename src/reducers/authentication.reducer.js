import { userConstants } from '../constants/user.constants';

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_PENDING:
      return {
        loading: true
      };
    case userConstants.LOGIN_FULFILLED:
      return {
        loading: false,
        user: action.payload
      };
    case userConstants.LOGIN_REJECTED:
      return { 
        loading: false,
        isRejected: true,
        error: action.payload
      };
    default:
      return state
  }
}