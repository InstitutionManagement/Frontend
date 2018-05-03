import { institutionConstants } from "../../constants/institution.constants";

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
    default:
      return state;
  }
}
