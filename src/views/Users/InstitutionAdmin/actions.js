import { alertActions } from '../../../redux/Actions/alert.actions';
import { actionHelper } from '../../../redux/Actions/Helpers/action.helper';
import { institutionAdminConstants } from './constants';
import { institutionAdminService } from './service';

const getAll = condition => {
  return dispatch => {
    dispatch(actionHelper.request(institutionAdminConstants.INSTITUTION_ADMIN_GETALL_REQUEST));
    institutionAdminService.getAll(condition).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(
            actionHelper.success(institutionAdminConstants.INSTITUTION_ADMIN_GETALL_SUCCESS, response.data.data)
          );
        } else {
          dispatch(
            actionHelper.failure(institutionAdminConstants.INSTITUTION_ADMIN_GETALL_FAILURE, response.data.error)
          );
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
        dispatch(
          actionHelper.failure(institutionAdminConstants.INSTITUTION_ADMIN_GETALL_FAILURE, String(error.message))
        );
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
};

export const institutionAdminActions = {
  getAll
};
