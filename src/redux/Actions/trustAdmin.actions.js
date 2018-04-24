import { alertActions } from './alert.actions';
import { actionHelper } from './Helpers/action.helper';
import { trustAdminConstants } from '../../constants/trustAdmin.constants';
import { trustAdminService } from '../../services/trustAdmin.service';

function registerTrustAdmin(trustAdmin) {
  return dispatch => {
    dispatch(actionHelper.request(trustAdminConstants.TRUST_ADMIN_REGISTER_REQUEST, trustAdmin));
    trustAdminService.registerTrustAdmin(trustAdmin).then(
      response => {
        if (response.status === 200 && response.data.error === null && Object.keys(response.data.data).length > 0) {
          dispatch(actionHelper.success(trustAdminConstants.TRUST_ADMIN_REGISTER_SUCCESS, response.data.data));
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

export const trustAdminActions = {
  registerTrustAdmin
};
