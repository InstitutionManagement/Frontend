import { trustAdminConstants } from '../../constants/trustAdmin.constants';

export function trustAdmin(state = {}, action) {
  switch (action.type) {
    // START ADMIN's BY TRUST ID
    case trustAdminConstants.TRUST_ADMIN_REGISTER_REQUEST:
      return {
        ...state,
        registerloading: true
      };
    case trustAdminConstants.TRUST_ADMIN_REGISTER_SUCCESS:
      const { adminsById } = state;
      return {
        ...state,
        registerloading: false,
        adminsById: [...adminsById, action.data]
      };
    case trustAdminConstants.TRUST_ADMIN_REGISTER_FAILURE:
      return {
        ...state,
        registerloading: false
      };
    // END ADMIN's BY TRUST ID
    // START ADMIN's BY TRUST ID
    case trustAdminConstants.TRUST_ADMIN_GETBYID_REQUEST:
      return {
        ...state,
        adminsByIdloading: true
      };
    case trustAdminConstants.TRUST_ADMIN_GETBYID_SUCCESS:
      return {
        ...state,
        adminsByIdloading: false,
        adminsById: action.data
      };
    case trustAdminConstants.TRUST_ADMIN_GETBYID_FAILURE:
      return {
        ...state,
        adminsByIdloading: false,
        adminsById: []
      };
    // END ADMIN's BY TRUST ID
    // START GET ALL ADMIN's
    case trustAdminConstants.TRUST_ADMIN_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case trustAdminConstants.TRUST_ADMIN_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        admins: action.data
      };
    case trustAdminConstants.TRUST_ADMIN_GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        admins: []
      };
    // END GET ALL  ADMIN's
    default:
      return state;
  }
}
