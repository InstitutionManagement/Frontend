import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { trusts } from './trust.reducer';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  users,
  trusts
});

export default rootReducer;
