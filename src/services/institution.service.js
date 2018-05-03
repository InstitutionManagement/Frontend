import http from './http.service';

const registerInstitution = institution => http.post('/api/institution/register', institution);

export const institutionService = {
  registerInstitution
};
