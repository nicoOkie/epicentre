/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';


/**
 * Local import
 */
import './main.scss';
import Home from '../Home';

/**
 * Code
 */
const Main = () => (
  <main className="main">
    <Route exact path="/" component={Home} />
  </main>
);


/**
 * Export
 */
export default Main;
