import httpService from './http.service';

const register = user => httpService.post('/api/institutionadmin/register', user);

export const institutionAdminService = {
  register
};
