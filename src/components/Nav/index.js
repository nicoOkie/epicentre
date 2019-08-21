/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import { getURL } from 'src/utils/url';

/**
 * Local import
 */
import './nav.scss';

/**
 * Code
 */
const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-users">
        <h2>Utilisateurs</h2>
        <ul>
          <li>Licences et tarifs</li>
          <li>Mises à jour</li>
          <li>Vos suggestions</li>
        </ul>
      </li>
      <li className="nav-list-discovery">
        <h2>Découverte</h2>
        <ul>
          <li>Fiche descriptive</li>
          <li>Saisie de la structure</li>
          <li>Descente de charges</li>
          <li>Calcul sismique</li>
          <li>Vérification des murs</li>
          <li>Eurocodes</li>
          <li>Étude comparative</li>
          <li>Bibliogarphie</li>
          <li>Questions fréquentes</li>
          <li>D'autres questions ?</li>
          <li>Prêt d'évaluation</li>
          <li>Offre éducation</li>
          <li>Version gratuite</li>
        </ul>
      </li>
      <li className="nav-list-docs">
        <h2>Infos & doc</h2>
        <ul>
          <li>Accueil</li>
          <li>Contact</li>
          <li>Plan du site</li>
          <li>Recommander ce site</li>
        </ul>
      </li>
      <li className="nav-list-admin">
        <ul>
          <li>Accueil</li>
          <li>Contact</li>
          <li>Plan du site</li>
          <li>Recommander ce site</li>
        </ul>
      </li>
      <li className="nav-list-print">Imprimer</li>
    </ul>
  </nav>
);


/**
 * Export
 */
export default Nav;
