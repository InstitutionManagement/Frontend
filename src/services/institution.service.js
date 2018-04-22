
import http from './http.service';

const create = institution => http.post('/api/institution/register', institution);


export const institutionService = {
  create
};
