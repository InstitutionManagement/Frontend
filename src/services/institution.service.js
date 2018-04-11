import { authHeader } from './auth.header';
import { serverConfig } from './server.config';

const API_BASE_PATH = serverConfig();

const create = institution => {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(institution)
  };

  return fetch(`${API_BASE_PATH}/api/institution/register`, requestOptions).then(handleResponse);
};

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}

export const institutionService = {
  create
};
