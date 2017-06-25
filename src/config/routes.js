import React from 'react';
import App from '../components/App';
import NewsLists from '../components/news/NewsDisplay';
import NewsList from '../containers/NewsList';
import SourceLists from '../containers/SourcesList'
import TechList from '../containers/TechList'
import PoliticsList from '../containers/PoliticsList'

const ReactRouter = require('react-router');
const HomePage = require('../components/home/Home');
const hashHistory = ReactRouter.hashHistory;
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
 <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
     <Route path="news" component={NewsList} />
     <Route path="sources" component={SourceLists} />
     <Route path="tech" component={TechList} />
     <Route path="politics" component={PoliticsList} />
  </Route>
 </Router>
);

module.exports = routes;
