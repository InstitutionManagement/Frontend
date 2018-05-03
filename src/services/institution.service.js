import http from './http.service';

const register = institution => http.post('/api/institute/register', institution);

const getAll = (condition = {}) => http.post(`api/institute/getInstitutes`, condition);

export const institutionService = {
  register,
  getAll
};
