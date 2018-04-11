import { http } from './http.service';



const create = trust => {
  return http.post(`/api/trust/register`, trust);
};

const update = (trust, id) => {};

const getAll = (condition = {}) => {
  // const requestOptions = {
  //   method: 'POST',
  //   headers: authHeader(),
  //   body: JSON.stringify(condition)
  // };
  // return fetch(`${API_BASE_PATH}/api/trust/getAllTrusts`, requestOptions).then(handleResponse);
};

const _delete = () => {};

// function handleResponse(response) {
//   if (!response.ok) {
//     return Promise.reject(response.statusText);
//   }

//   return response.json();
// }

export const trustService = {
  create,
  update,
  getAll,
  delete: _delete
};
