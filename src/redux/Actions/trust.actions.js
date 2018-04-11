import { alertActions } from './alert.actions';
import { trustService } from '../../services/trust.service';
import { trustConstants } from '../../constants/trust.constants';

const create = trust => {
  return dispatch => {
    trustService.create(trust).then(
      trust => {
        if (Object.keys(trust.data).length === 0) {
          dispatch(alertActions.error(trust.error.errmsg ? trust.error.errmsg : trust.error.message));
        } else {
          dispatch(alertActions.success('Created Trust Successfully'));
        }
      },
      error => {
        dispatch(alertActions.error(error));
      }
    );
  };
};

const update = () => {};

const getAll = condition => {
  return dispatch => {
    dispatch(request());
    trustService.getAll(condition).then(
      response => {
        if (response.status === 200 && Object.keys(response.data.data).length > 0) {
          dispatch(success(response.data.data));
        } else if(response.status === 200) {
          dispatch(alertActions.error(response.data.error.errmsg ? response.error.errmsg : response.error.message));
        }
      },
      error => {
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(trusts) {
    return { type: trustConstants.GETALL_SUCCESS, trusts };
  }

  function request() {
    return { type: trustConstants.GETALL_REQUEST };
  }
};

const _delete = () => {};

export const trustActions = {
  create,
  update,
  getAll,
  delete: _delete
};
