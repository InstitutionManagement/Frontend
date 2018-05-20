import { institutionAdminConstants } from './constants';
export function institutionAdmin(state = {}, action) {
  switch (action.type) {
    case institutionAdminConstants.INSTITUTION_ADMIN_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case institutionAdminConstants.INSTITUTION_ADMIN_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    default:
      return state;
  }
}
