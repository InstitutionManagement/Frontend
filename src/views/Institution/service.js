import http from '../../services/http.service';

const register = institution => http.post('/api/institution/register', institution);

const getAll = (condition = {}) => http.post(`/api/institution/getInstitutions`, condition);

const _delete = instition_id => http.delete(`/api/institution/deleteInstitution/${instition_id}`);

export const institutionService = {
  register,
  getAll,
  delete: _delete
};
