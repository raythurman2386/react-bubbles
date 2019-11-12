import React, { useState } from 'react';
import { axiosWithAuth as axios } from '../utils/axios';

const Login = props => {
  const [data, setData] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const handleChange = e => {
    console.log(e);
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios()
      .post('/api/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          placeholder='Username'
          value={data.username}
          onChange={e => handleChange(e)}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={data.password}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
