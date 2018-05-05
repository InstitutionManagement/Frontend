import http from './http.service';

const register = institution => http.post('/api/institute/register', institution);

const getAll = (condition = {}) => http.post(`/api/institute/getInstitutes`, condition);

const _delete = (instition_id) => http.delete(`/api/institute/deleteInstitute/${instition_id}`);

export const institutionService = {
  register,
  getAll,
  delete:_delete
};
