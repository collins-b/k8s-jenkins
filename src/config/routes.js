import React from 'react';
import App from '../components/App';

const ReactRouter = require('react-router');
const HomePage = require('../components/home/Home');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

module.exports = routes;
