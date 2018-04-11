
import {http} from './http.service';
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  return  http.post('/api/login', { username, password });
}

// remove user from local storage to log user out
function logout() {
  localStorage.removeItem('user');
}

function getAll() {
  return http.get('/users');
}

function getById(id) {
  return http.get('/users/' + id);
}

function register(user) {
  return http.post('/users/register', user);
}

function update(user) {
  return fetch('/users/update', user);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return fetch.post('/users/delete', id);
}

