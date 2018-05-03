import { alertActions } from './alert.actions';
import { institutionService } from '../../services/institution.service';
import { institutionConstants } from '../../constants/institution.constants';
import { actionHelper } from './Helpers/action.helper';
// import { request } from 'https';

const registerInstitution = institution => {
  return dispatch => {
    dispatch(actionHelper.request(institutionConstants.INSTITUTION_REGSITER_REQUEST));
    institutionService.registerInstitution(institution).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(institutionConstants.INSTITUTION_REGSITER_SUCCESS, institution));
          dispatch(alertActions.success(response.data.data.message));
        } else {
          dispatch(actionHelper.failure(institutionConstants.INSTITUTION_REGSITER_FAILURE, response.data.error));
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
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
};

const update = () => {};

const _delete = () => {};

const getAllInstitution = params => {};

export const institutionActions = {
  registerInstitution,
  update,
  getAllInstitution,
  delete: _delete
};
