const BASE_URL = 'http://10.58.1.7:8000';
const CCH_URL = 'http://10.58.4.237:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Join: `${BASE_URL}/users/signup`,
  JoinId: `${BASE_URL}/users/signup/idcheck`,
  MenuList: `${BASE_URL}/products`,
  ProductSpec: `${BASE_URL}/products/`,
  Cart: `${BASE_URL}/carts`,
  Best: `${CCH_URL}/products/sorting?sorting=sale`,
};

export default API;
