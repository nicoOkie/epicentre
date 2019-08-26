/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


/**
 * Local import
 */
import './nav.scss';
import { getURL } from '../../utils/url';
import {
  usersNav,
  discoverNav,
  infoNav,
  mainNav,
} from '../../utils/navItems';

/**
 * Code
 */
const Nav = () => (
  <nav className="nav">
    <section className="nav-section">
      <h2 className="nav-section-title">Utilisateurs</h2>
      {usersNav.map(navItem => (
        <NavLink
          to={getURL('/utilisateurs', navItem)}
          key={navItem}
          exact
          className="nav-link"
          activeClassName="nav-link--active"
        >
          {navItem}
        </NavLink>
      ))}
    </section>
    <section className="nav-section">
      <h2 className="nav-section-title">Découverte</h2>
      {discoverNav.map(navItem => (
        <NavLink
          to={getURL('/utilisateurs', navItem)}
          key={navItem}
          exact
          className="nav-link"
          activeClassName="nav-link--active"
        >
          {navItem}
        </NavLink>
      ))}
    </section>
    <section className="nav-section">
      <h2 className="nav-section-title">Infos et doc</h2>
      {infoNav.map(navItem => (
        <NavLink
          to={getURL('/utilisateurs', navItem)}
          key={navItem}
          exact
          className="nav-link"
          activeClassName="nav-link--active"
        >
          {navItem}
        </NavLink>
      ))}
    </section>
    <section className="nav-section">
      {mainNav.map(navItem => (
        <NavLink
          to={getURL('/utilisateurs', navItem)}
          key={navItem}
          exact
          className="nav-link"
          activeClassName="nav-link--active"
        >
          {navItem}
        </NavLink>
      ))}
    </section>
  </nav>
);


/**
 * Export
 */
export default Nav;
