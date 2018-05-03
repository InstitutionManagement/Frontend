import { alertConstants } from '../../constants/alert.constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: alertConstants.SUCCESS,
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: alertConstants.ERROR,
        message: action.message
      };
    case alertConstants.WARNING:
      return {
        type: alertConstants.WARNING,
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
