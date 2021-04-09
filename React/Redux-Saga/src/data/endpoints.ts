export const PORT = 3000;
export const BASE_URL = `http://localhost:${PORT}`;

export const endpoints = {
  getProperties: `/property/properties`,
  addFavorite: `/property/favorite`,
  addComment: `/property/comment`,
  getCity: `/property/city`,
  getStreetName: `/property/streetName`,
  getZip: `/property/zip`,
  login: `/login`,
  getSecurityMessage: `/user/getsecuritymessage`,
};

export const getEndpointUrl = (endpoint: string) => `${BASE_URL}${endpoint}`;
