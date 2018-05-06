import { alertActions } from './alert.actions';
import { institutionService } from '../../services/institution.service';
import { institutionConstants } from '../../constants/institution.constants';
import { actionHelper } from './Helpers/action.helper';
// import { request } from 'https';

const register = institution => {
  return dispatch => {
    dispatch(actionHelper.request(institutionConstants.INSTITUTION_REGSITER_REQUEST));
    institutionService.register(institution).then(
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

const getAll = condition => {
  return dispatch => {
    dispatch(actionHelper.request(institutionConstants.INSTITUTION_GETALL_REQUEST));
    institutionService.getAll(condition).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(institutionConstants.INSTITUTION_GETALL_SUCCESS, response.data.data));
        } else if (response.status === 200) {
          dispatch(alertActions.error(response.data.error.message));
        }
      },
      error => {
        if (error.response && error.response.status === 500 && error.response.data) {
          dispatch(
            actionHelper.failure(
              institutionConstants.INSTITUTION_GETALL_FAILURE,
              String(error.response.data.error.message)
            )
          );
          dispatch(alertActions.error(error.response.data.error.message));
        } else {
          dispatch(actionHelper.failure(institutionConstants.INSTITUTION_GETALL_FAILURE, error.message));
          dispatch(alertActions.error(String(error.message)));
        }
      }
    );
  };
};

const update = () => {};

const _delete = id => {
  return dispatch => {
    dispatch(actionHelper.request(institutionConstants.INSTITUTION_DELETE_REQUEST, { id }));
    institutionService.delete(id).then(
      response => {
        if (actionHelper.successCheck(response)) {
          dispatch(actionHelper.success(institutionConstants.INSTITUTION_DELETE_SUCCESS, { id }));
          dispatch(alert.success(response.data.message));
        } else {
          dispatch(actionHelper.failure(institutionConstants.INSTITUTION_DELETE_FAILURE, response.data.error.message));
          dispatch(alertActions.error(String(response.data.error.message)));
        }
      },
      error => {
        dispatch(actionHelper.failure(institutionConstants.INSTITUTION_DELETE_FAILURE, error));
        dispatch(alertActions.error(String(error.message)));
      }
    );
  };
};

export const institutionActions = {
  register,
  update,
  getAll,
  delete: _delete
};
