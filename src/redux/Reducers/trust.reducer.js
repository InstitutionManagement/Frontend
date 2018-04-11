import { trustConstants } from '../../constants/trust.constants';

export function trusts(state = {}, action) {
  switch (action.type) {
    case trustConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case trustConstants.GETALL_SUCCESS:
      return {
        data: action.trusts
      };
    default:
      return state;
  }
}
