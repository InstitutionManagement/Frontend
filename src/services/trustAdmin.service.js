import http from './http.service';

const registerTrustAdmin = (trustAdmin) => http.post('/api/trustadmin/register', trustAdmin);

const getTrustAdmins = (condition) => http.post('/api/trustadmin/getTrustAdmin', condition);

export const trustAdminService = {
    registerTrustAdmin,
    getTrustAdmins
}