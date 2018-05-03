import { alertActions } from './alert.actions';
import { actionHelper } from './Helpers/action.helper';
import { trustAdminConstants } from '../../constants/trustAdmin.constants';
import { trustAdminService } from '../../services/trustAdmin.service';

function registerTrustAdmin(trustAdmin) {
  return dispatch => {
    dispatch(actionHelper.request(trustAdminConstants.TRUST_ADMIN_REGISTER_REQUEST, trustAdmin));
    trustAdminService.registerTrustAdmin(trustAdmin).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(trustAdminConstants.TRUST_ADMIN_REGISTER_SUCCESS, trustAdmin));
          dispatch(alertActions.success(response.data.data.message));
        } else {
          dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_REGISTER_FAILURE, response.data.error));
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
        dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_REGISTER_FAILURE, String(error.message)));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

function getTrustAdmins(params) {
  return dispatch => {
    dispatch(actionHelper.request(trustAdminConstants.TRUST_ADMIN_GETBYID_REQUEST));
    trustAdminService.getTrustAdmins(params).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(trustAdminConstants.TRUST_ADMIN_GETBYID_SUCCESS, response.data.data));
        } else {
          dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_GETBYID_FAILURE, response.data.error));
          dispatch(
            alertActions.error(
              response.data.error && response.data.error.errmsg
                ? actionHelper.duplicateKeyMessage(response.data.error.errmsg)
                : String(response.data.error.message)
            )
          );
        }
      },
      error => {
        dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_GETBYID_FAILURE, String(error.message)));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

function getAllTrustAdmins(params = {}) {
  return dispatch => {
    dispatch(actionHelper.request(trustAdminConstants.TRUST_ADMIN_GETALL_REQUEST));
    trustAdminService.getTrustAdmins(params).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(trustAdminConstants.TRUST_ADMIN_GETALL_SUCCESS, response.data.data));
        } else {
          dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_GETALL_FAILURE, response.data.error));
          dispatch(
            alertActions.error(
              response.data.error && response.data.error.errmsg
                ? actionHelper.duplicateKeyMessage(response.data.error.errmsg)
                : String(response.data.error.message)
            )
          );
        }
      },
      error => {
        dispatch(actionHelper.failure(trustAdminConstants.TRUST_ADMIN_GETALL_FAILURE, String(error.message)));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
}

export const trustAdminActions = {
  registerTrustAdmin,
  getTrustAdmins,
  getAllTrustAdmins
};
