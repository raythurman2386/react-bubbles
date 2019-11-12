import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? <Component {...props} /> : <Redirect to='/' />
    }
  />
);

export default PrivateRoute;
