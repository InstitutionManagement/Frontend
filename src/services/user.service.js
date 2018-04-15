
import {http} from './http.service';

const login = (username, password) =>  http.post('/api/login', { username, password });
// remove user from local storage to log user out
const logout = () => {  localStorage.removeItem('user');}

const getAll = () =>  http.get('/users');

const getById = (id) =>  http.get('/users/' + id);

const superAdminRegister = (user) => http.post('/api/superadmin/register', user);

const getAllSuperAdmins = () =>  http.post('/api/superadmin/getAllSuperAdmins');

const update = (user) => fetch('/users/update', user);

// prefixed const name with underscore because delete is a reserved word in javascript
const _delete = (id) => fetch.post('/users/delete', id);

export const userService = {
  login,
  logout,
  superAdminRegister,
  getAllSuperAdmins,
  getAll,
  getById,
  update,
  delete: _delete
};