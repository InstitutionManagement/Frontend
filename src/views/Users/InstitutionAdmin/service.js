import httpService from '../../../services/http.service';

const getInstitutionAdmins = condition => httpService.post('/api/institutionadmin/getInstitutionAdmins', condition);

export const institutionAdminService = {
  getAll: getInstitutionAdmins
};
