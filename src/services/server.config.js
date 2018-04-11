export function serverConfig() {
  let API_BASE_PATH = '';
  if (process.env.NODE_ENV === 'development') {
    API_BASE_PATH = process.env.PUBLIC_URL;
  } else if (process.env.NODE_ENV === 'production') {
    API_BASE_PATH = process.env.PUBLIC_URL;
  }

  return API_BASE_PATH;
}
