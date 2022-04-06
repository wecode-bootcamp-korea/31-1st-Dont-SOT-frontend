const BASE_URL = 'http://10.58.7.32:8000';
const API = {
  Login: `${BASE_URL}/users/signin`,
  Join: `${BASE_URL}/users/signin/signup`,
  JoinId: `${BASE_URL}/users/signin/idcheck`,
  MenuList: `${BASE_URL}/products`,
  ProductSpec: `${BASE_URL}/products/`,
  Cart: `${BASE_URL}/carts`,
};

export default API;
