import { userConstants } from '../../constants/user.constants';
import Helper from '../../services/helper.functions';

let user= Helper.UserValidator();

const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user:action.data
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
}
