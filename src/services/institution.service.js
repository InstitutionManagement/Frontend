import http from './http.service';

const registerInstitution = institution => http.post('/api/institute/register', institution);

export const institutionService = {
  registerInstitution
};
