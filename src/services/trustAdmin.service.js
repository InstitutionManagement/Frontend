import http from './http.service';

const registerTrustAdmin = (trustAdmin) => http.post('/api/trustadmin/register', trustAdmin);

export const trustAdminService = {
    registerTrustAdmin
}