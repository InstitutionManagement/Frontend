import { userConstants } from '../../constants/user.constants';
import { userService } from '../../services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../../services/browser.history';
import {actionHelper} from './Helpers/action.helper'

export const userActions = {
  login,
  logout,
  superAdminRegister,
  getAll,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(actionHelper.request(userConstants.LOGIN_REQUEST, { username }));
    userService.login(username, password).then(
      response => {
        if (actionHelper.successCheck(response)) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          dispatch(actionHelper.success(userConstants.LOGIN_SUCCESS, response.data.data));
          window.location.href = '/dashboard';
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

function superAdminRegister(user) {
  return dispatch => {
    dispatch(request(user));
    userService.superAdminRegister(user).then(
      response => {
        if(response.status === 200 && response.data.error === null && Object.keys(response.data.data).length > 0){
          dispatch(success(response.data.data));
          dispatch(alertActions.success('Super Admin Registration Successfull'));
        }else{
          dispatch(failure(response.data.error));
          dispatch(alertActions.error(response.data.error.message));
        }
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
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
