import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { trusts } from './trust.reducer';
import { superAdmin } from '../../views/Users/SuperAdmin/reducer';
import { trustAdmin } from '../../views/Users/TrustAdmin/reducer';
import { institution } from './institution.reducer';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  users,
  superAdmin,
  trusts,
  trustAdmin,
  institution
});

export default rootReducer;
