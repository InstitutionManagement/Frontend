import { alertActions } from './alert.actions';
import { institutionService } from '../../services/institution.service';
import { institutionConstants } from '../../constants/institution.constants';
import { request } from 'https';

const create = institution => {
  return dispatch => {
    dispatch(request());
    institutionService.create(institution).then(
      institution => {
        if (Object.keys(institution.data).length === 0) {
          dispatch(alertActions.error(institution.error.errmsg ? institution.error.errmsg : institution.error.message));
        } else {
          dispatch(success(institution.data));
          dispatch(alertActions.success('Created Institution Successfully'));
        }
      },
      error => {
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(institution) {
    return { type: institutionConstants };
  }
};

const update = () => {};

const _delete = () => {};

const getAll = () => {};

export const institutionActions = {
  create,
  update,
  getAll,
  delete: _delete
};
