/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getURL } from 'src/utils/url';

/**
 * Local import
 */
import './header.scss';

/**
 * Code
 */
const Header = () => (
  <header className="header">
    <Link to="/">
      Logiciel <span className="epicentre">épicentre</span>
    </Link>
  </header>
);


/**
 * Export
 */
export default Header;
