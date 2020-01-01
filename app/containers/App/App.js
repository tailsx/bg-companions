/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';
import Companion18xx from '../Companion18xx';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - Board Game Companion Apps" defaultTitle="Board Game Companion Apps">
      <meta name="description" content="Home for a few board game companion Apps" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/18xx" component={Companion18xx} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
