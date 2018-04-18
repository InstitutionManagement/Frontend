
import {http} from './http.service';

const getSuperAdminById = (id) =>  http.get('/users/' + id);

const registerSuperAdmin = (user) => http.post('/api/superadmin/register', user);

const getSuperAdmins = () =>  http.post('/api/superadmin/getSuperAdmins');

const updateSuperAdmin = (user) => http.post('/users/update', user);

const activateSuperAdmin = (authId) => http.put(`/api/common/user/activate/${authId}`);

const resetSuperAdminPassword = (cred) => http.post(`/api/superadmin/admin/resetPassword`, cred);

// prefixed const name with underscore because delete is a reserved word in javascript
const deleteSuperAdmin = (authId, superAdminId) => http.delete(`/api/superadmin/deleteSuperAdmin/${authId}/${superAdminId}`);

export const superAdminService = {
  getSuperAdminById,
  registerSuperAdmin,
  getSuperAdmins,
  updateSuperAdmin,
  activateSuperAdmin,
  resetSuperAdminPassword,
  deleteSuperAdmin
};