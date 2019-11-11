import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById('root');
render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);
