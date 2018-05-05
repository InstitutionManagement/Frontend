import http from './http.service';

const create = trust => http.post(`/api/trust/register`, trust);

const update = (trust, id) => {};

const getAll = (condition = {}) => http.post(`api/trust/getAllTrusts`, condition);

const _delete = () => {};

export const trustService = {
  create,
  update,
  getAll,
  delete: _delete
};
