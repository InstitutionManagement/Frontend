const request = (type, request) => {
  return { type: type, request };
};
const success = (type, data) => {
  return { type: type, data };
};
const failure = (type, error) => {
  if (String(error) === 'Failed to authenticate token.') {
    window.location.href = '/login';
  }
  return { type: type, error };
};

const duplicateKeyMessage = error => {
  error = error.split('$');
  let name;
  if (error.length > 1) {
    name = error[1].split('_')[0];
  }
  return `${name[0].toUpperCase()}${name.slice(1)} already exists`;
};

const successCheck = response => response.status === 200 && response.data.error === null;

export const actionHelper = {
  request,
  success,
  failure,
  successCheck,
  duplicateKeyMessage
};
