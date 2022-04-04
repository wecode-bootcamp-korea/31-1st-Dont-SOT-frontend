const BASE_URL = 'http://10.58.7.71:8000';
const API = {
  Login: `${BASE_URL}/users/signin`,
  Join: `${BASE_URL}/users/signin/signup`,
  JoinId: `${BASE_URL}/users/signin/idcheck`,
  MenuList: `${BASE_URL}/products/`,
};

export default API;
