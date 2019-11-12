import axios from 'axios';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  });
};
