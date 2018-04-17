import { superAdminConstants } from '../../constants/super_admin.constants';

export function superAdmin(state = {}, action) {
  switch (action.type) {
    // START GETALL REQUEST
    case superAdminConstants.SUPERADMIN_GETALL_REQUEST:
      return {
        loading: true
      };
    case superAdminConstants.SUPERADMIN_GETALL_SUCCESS:
      return {
        data: action.data
      };
    case superAdminConstants.SUPERADMIN_GETALL_FAILURE:
      return {
        error: action.error
      };
    // END GETALL REQUEST

    // START REGISTRATION REQUEST
    case superAdminConstants.SUPERADMIN_REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case superAdminConstants.SUPERADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        registering: false
      };
    case superAdminConstants.SUPERADMIN_REGISTER_FAILURE:
      return {
        ...state,
        registering: false
      };
    // END REGISTRATION REQUEST

    // START DELETE REQUEST
    case superAdminConstants.SUPERADMIN_DELETE_REQUEST:
      return {
        ...state,
        data: state.data.map(
          superAdmin =>
            superAdmin.superadmin_id === action.request.superAdminId ? { ...superAdmin, deleting: true } : superAdmin
        )
      };
    case superAdminConstants.SUPERADMIN_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.map(superAdmin => {
          if (superAdmin.superadmin_id === action.data.superAdminId) {
            superAdmin.deleting = false;
            superAdmin.status.tag = 'DELETED';
          }
          return superAdmin;
        })
      };
    case superAdminConstants.SUPERADMIN_DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        data: state.data.map(superAdmin => {
          if (superAdmin.deleting) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...superAdminCopy } = superAdmin;
            // return copy of user with 'deleteError:[error]' property
            return { ...superAdminCopy, deleteError: action.error };
          }
          return superAdmin;
        })
      };
    // END DELETE REQUEST

    // START ACTIVATION REQUEST

    case superAdminConstants.SUPERADMIN_ACTIVATE_REQUEST:
      return {
        ...state,
        data: state.data.map(
          superAdmin => 
            superAdmin.auth_id === action.request.authId ? { ...superAdmin, activating: true } : superAdmin
        )
      };
      case superAdminConstants.SUPERADMIN_ACTIVATE_SUCCESS:
      return {
        ...state,
        data: state.data.map(superAdmin => {
          if (superAdmin.auth_id === action.data.authId) {
            superAdmin.activating = false;
            superAdmin.status.tag = 'ACTIVE';
          }
          return superAdmin;
        })
      };
      case superAdminConstants.SUPERADMIN_ACTIVATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        data: state.data.map(superAdmin => {
          if (superAdmin.activating) {
            // make copy of user without 'deleting:true' property
            const { activating, ...superAdminCopy } = superAdmin;
            // return copy of user with 'deleteError:[error]' property
            return { ...superAdminCopy, activateError: action.error };
          }
          return superAdmin;
        })
      };
    // END ACTIVATION REQUEST

    default:
      return state;
  }
}
