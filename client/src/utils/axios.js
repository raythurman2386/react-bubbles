import axios from 'axios';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    }
  });
};
