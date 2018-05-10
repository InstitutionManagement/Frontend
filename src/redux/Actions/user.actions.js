import { userConstants } from '../../constants/user.constants';
import { userService } from '../../services/user.service';
import { alertActions } from './alert.actions';
import { actionHelper } from './Helpers/action.helper';

export const userActions = {
  login,
  logout,
  getAll,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(actionHelper.request(userConstants.LOGIN_REQUEST, { username }));
    userService.login(username, password).then(
      response => {
        if (response.data.error === null && response.data.data.token !== null && actionHelper.successCheck(response)) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          dispatch(actionHelper.success(userConstants.LOGIN_SUCCESS, response.data.data));          
        } else if (
          response.data.error === null &&
          response.data.data.token === null &&
          response.data.data.error !== null
        ) {
          dispatch(actionHelper.failure(userConstants.LOGIN_FAILURE, response.data.data.error.message));
          dispatch(alertActions.error(response.data.data.error.message));
        } else {
          dispatch(actionHelper.failure(userConstants.LOGIN_FAILURE, response.data.error.message));
          dispatch(alertActions.error(response.data.error.message));
        }
      },
      error => {
        dispatch(actionHelper.failure(userConstants.LOGIN_FAILURE, error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());
    userService.getAll().then(users => dispatch(success(users)), error => dispatch(failure(error)));
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id).then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}
