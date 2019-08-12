/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import './app.scss';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <div id="app-nav">
      <Nav />
    </div>
    <div id="app-main">
      <Main />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
