import axios from 'axios';

const API_URL = 'http://localhost:4000';
const url = route => `${API_URL}/${route}`;

export async function get(route, config) {
  return axios
    .get(url(route), config)
    .then(res => res)
}

export async function post(route, data) {
  return axios
    .post(url(route), data)
    .then(res => res)
}
