import { superAdminConstants } from '../../constants/superAdmin.constants';
import { superAdminService } from '../../services/superAdmin.service';
import { alertActions } from './alert.actions';
import { actionHelper } from './Helpers/action.helper';

function registerSuperAdmin(user) {
  return dispatch => {
    dispatch(actionHelper.request(superAdminConstants.SUPERADMIN_REGISTER_REQUEST, user));
    superAdminService.registerSuperAdmin(user).then(
      response => {
        if (response.status === 200 && response.data.error === null && Object.keys(response.data.data).length > 0) {
          dispatch(actionHelper.success(superAdminConstants.SUPERADMIN_REGISTER_SUCCESS, response.data.data));
          dispatch(alertActions.success(response.data.data.message));
        } else {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_REGISTER_FAILURE, response.data.error));
          dispatch(
            alertActions.error(
              response.data.error.errmsg
                ? actionHelper.duplicateKeyMessage(response.data.error.errmsg)
                : String(response.data.error.message)
            )
          );
        }
      },
      error => {
        dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_REGISTER_FAILURE, String(error.message)));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

function getSuperAdmins() {
  return dispatch => {
    dispatch(actionHelper.request(superAdminConstants.SUPERADMIN_GETALL_REQUEST));
    superAdminService.getSuperAdmins().then(
      response => {
        if (response.status === 200 && Object.keys(response.data.data).length > 0) {
          dispatch(actionHelper.success(superAdminConstants.SUPERADMIN_GETALL_SUCCESS, response.data.data));
        } else if (response.status === 200) {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_GETALL_FAILURE, response.data.error));
          dispatch(alertActions.error(response.data.error.message));
        }
      },
      error => {
        if (error.response.status === 500 && error.response.data) {
          dispatch(
            actionHelper.failure(
              superAdminConstants.SUPERADMIN_GETALL_FAILURE,
              String(error.response.data.error.message)
            )
          );
          dispatch(alertActions.error(error.response.data.error.message));
        } else {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_GETALL_FAILURE, error));
          dispatch(alertActions.error(String(error.message)));
        }
      }
    );
  };
}

// prefixed function name with underscore because delete is a reserved word in javascript
function deleteSuperAdmin(authId, superAdminId) {
  return dispatch => {
    dispatch(
      actionHelper.request(superAdminConstants.SUPERADMIN_DELETE_REQUEST, {
        superAdminId
      })
    );
    superAdminService.deleteSuperAdmin(authId, superAdminId).then(
      response => {
        if (response.status === 200 && response.data.error === null) {
          dispatch(
            actionHelper.success(superAdminConstants.SUPERADMIN_DELETE_SUCCESS, {
              superAdminId
            })
          );
          dispatch(alertActions.error('Successfully Deleted SuperAdmin'));
        } else {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_DELETE_FAILURE, response.data.error.message));
          dispatch(alertActions.error(String(response.data.error.message)));
        }
      },
      error => {
        dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_DELETE_FAILURE, error));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

function activateSuperAdmin(authId) {
  return dispatch => {
    dispatch(
      actionHelper.request(superAdminConstants.SUPERADMIN_ACTIVATE_REQUEST, {
        authId
      })
    );
    superAdminService.activateSuperAdmin(authId).then(
      response => {
        if (response.status === 200 && response.data.error === null) {
          dispatch(
            actionHelper.success(superAdminConstants.SUPERADMIN_ACTIVATE_SUCCESS, {
              authId
            })
          );
          dispatch(alertActions.success('Successfully Activated SuperAdmin'));
        } else {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_ACTIVATE_FAILURE, response.data.error.message));
          dispatch(alertActions.error(String(response.data.error.message)));
        }
      },
      error => {
        dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_ACTIVATE_FAILURE, error));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

function resetPassword(authId, email, phone) {
  return dispatch => {
    dispatch(
      actionHelper.request(superAdminConstants.SUPERADMIN_RESET_PASSWORD_REQUEST, {
        authId
      })
    );
    superAdminService
      .resetSuperAdminPassword({
        auth_id: authId,
        email,
        phone
      })
      .then(
        response => {
          if (response.status === 200 && response.data.error === null) {
            dispatch(
              actionHelper.success(superAdminConstants.SUPERADMIN_RESET_PASSWORD_SUCCESS, {
                authId
              })
            );
            dispatch(alertActions.success('Successfully Reset SuperAdmin Password'));
          } else {
            dispatch(
              actionHelper.failure(superAdminConstants.SUPERADMIN_RESET_PASSWORD_FAILURE, response.data.error.message)
            );
            dispatch(alertActions.error(String(response.data.error.message)));
          }
        },
        error => {
          dispatch(actionHelper.failure(superAdminConstants.SUPERADMIN_RESET_PASSWORD_FAILURE, error));
          dispatch(alertActions.error(String(error.message)));
        }
      );
  };
}

export const superAdminActions = {
  registerSuperAdmin,
  getSuperAdmins,
  activateSuperAdmin,
  deleteSuperAdmin,
  resetPassword
};
