/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getProducts() {
  return axios
    .get(`${BASE_URL}/v1/catalogue/products`)
    .then((response) => response.data);
}
export function getCartProducts(cart: any) {
  return axios
    .post(`${BASE_URL}/v1/catalogue/products`, { cart })
    .then((response) => response.data);
}

export function getPartsByVinCode(vinCode: string) {
  return axios
    .post(`${BASE_URL}/v1/part/search`, { vinCode })
    .then((response) => response.data);
}

export function pay(data: any) {
  return axios
    .get(`${BASE_URL}/v1/catalogue/pay`, {
      params: { 'x-access-token': localStorage.getItem('x-access-token') },
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject(err));
}
