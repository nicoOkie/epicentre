/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';


/**
 * Local import
 */
import './main.scss';
import Home from '../Home';
import User from '../User';
import Discover from '../Discover';
import Info from '../Info';
import Links from '../Links';

/**
 * Code
 */
const Main = () => (
  <main className="main">
    <Switch>
      {/** Home */}
      <Route exact path="/" component={Home} />
      {/** User Route */}
      <Route
        exact
        path="/utilisateurs/:slug"
        component={User}
      />
      {/** Discover Route */}
      <Route
        path="/decouverte/:slug"
        component={Discover}
      />
      {/** Infos & Doc Route */}
      <Route
        path="/infos-et-doc/:slug"
        component={Info}
      />
      {/** Liens */}
      <Route
        path="/liens/:slug"
        component={Links}
      />
    </Switch>
  </main>
);


/**
 * Export
 */
export default Main;
