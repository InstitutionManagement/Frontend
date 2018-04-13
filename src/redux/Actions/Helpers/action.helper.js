const request = (type, action) => {
    return { type: type, action };
  }
  const success = (type, action) => {
    return { type: type, action };
  }
  const failure = (type, error) => {
    return { type: type, error };
  }

  const successCheck = (response) => (response.status === 200 && Object.keys(response.data.data).length > 0);

  export const actionHelper = {
      request,
      success,
      failure,
      successCheck
  }