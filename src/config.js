const BASE_URL = 'http://10.58.3.250:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Join: `${BASE_URL}/users/signup`,
  JoinId: `${BASE_URL}/users/signup/idcheck`,
  MenuList: `${BASE_URL}/products`,
  ProductSpec: `${BASE_URL}/products/`,
  Cart: `${BASE_URL}/carts`,
  Best: `${BASE_URL}/products?sorting=-sales`,
};

export default API;
