import { institutionConstants } from './constants';

export function institution(state = {}, action) {
  switch (action.type) {
    case institutionConstants.INSTITUTION_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case institutionConstants.INSTITUTION_GETALL_FAILURE:
      return {
        ...state,
        loading: false
      };
    case institutionConstants.INSTITUTION_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    //START DELETE
    case institutionConstants.INSTITUTION_DELETE_REQUEST:
      return {
        ...state,
        data: state.data.map(
          institution =>
            institution.institution_id === action.request.id ? { ...institution, deleting: true } : institution
        )
      };

    case institutionConstants.INSTITUTION_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.map(institution => {
          if (institution.intitute_id === action.data.id) {
            institution.deleting = false;
            institution.status.tag = 'DELETED';
          }
          return institution;
        })
      };

    case institutionConstants.INSTITUTION_DELETE_FAILURE:
      return {
        ...state,
        data: state.data.map(
          institution => (institutionConstants.deleting ? { ...institution, deleting: false } : institution)
        )
      };
    // END DELETE

    default:
      return state;
  }
}
