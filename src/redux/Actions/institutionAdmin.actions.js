import { actionHelper } from './Helpers/action.helper';
import { institutionAdminConstants } from '../../constants/institutionAdmin.constants';
import { institutionAdminService } from '../../services/institutionAdmin.service';
import { alertActions } from './alert.actions';

const register = user => {
  return dispatch => {
    dispatch(actionHelper.request(institutionAdminConstants.INSTITUTIONADMIN_REGISTER_REQUEST));
    institutionAdminService.register(user).then(
      response => {
        dispatch(institutionAdminConstants.INSTITUTIONADMIN_REGISTER_SUCCESS, user);
        dispatch(alertActions.success(response.data.message));
      },
      error => {}
    );
  };
};

export const institutionAdminActions = {
  register
};
