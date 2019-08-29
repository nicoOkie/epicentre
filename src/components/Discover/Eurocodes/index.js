/**
 * NPM imports
 */
import React from 'react';

/**
 * Local Imports
 */
import './eurocodes.scss';

/**
 * Code
 */
const Eurocodes = () => (
  <>
    <h2 className="main-title">
      Bienvenue sur le site du logiciel <span className="epicentre">épicentre</span> !
      <div className="main-title-subtitle">Calcul sismique des bâtiments contreventés par des murs en béton ou en maçonnerie</div>
    </h2>

    <article className="main-content">
      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> permet desormais de traiter les murs en maçonnerie
        </h3>
        <p className="main-content-text">
          La version 17 d'<span className="epicentre">épicentre</span> prend en compte les murs en maçonnerie,
          y compris la vérification des sections, conformément aux Eurocodes EC6-1-1 et EC8-1.
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> est entièrement conforme aux Eurocodes
        </h3>
        <p className="main-content-text">
          <span className="epicentre">épicentre</span> prend en compte tous les Eurocodes concernés par le domaine d'application du logiciel (EC0, EC1, EC2-1-1, EC6-1-1, EC8-1).
          <br />
          Pour plus de précisions sur la prise en compte des Eurocodes, <a href="#">cliquez ici</a>
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> est facile à utiliser
        </h3>
        <p className="main-content-text">
          L'organisation claire et logique des différents modules,
          l'interface graphique intuitive et l'aide en ligne contextuelle permettent une
          prise en main rapide du logiciel et facilitent les utilisations occasionnelles.
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> est rapide
        </h3>
        <p className="main-content-text">
          Temps de calcul très courts (quelques minutes) pour la descente de charges générale,
          l'analyse modale, le calcul sismique dynamique,
          le ferraillage des murs en béton et la vérification des murs en maçonnerie.
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> est fiable
        </h3>
        <p className="main-content-text">
          Les méthodes de calcul et les algorithmes utilisés par <span className="epicentre">épicentre</span> sont bien rodés et sont validés dans leurs principes par les principaux bureaux de contrôle.
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> est efficasse
        </h3>
        <p className="main-content-text">
          Pour le calcul des bâtiments contreventés par des murs, <span className="epicentre">épicentre</span> est le seul logiciel qui propose à la fois une descente de charge traditionnelle rigoureuse, le calcul sismique dynamique par analyse modale spectrale, le dimensionnement automatique du ferraillage des murs en béton et la vérification des murs en maçonnerie, le tout en stricte conformité avec les Eurocodes.
          <br />
          Avec <span className="epicentre">épicentre</span>, vous réaliserez vos études de contreventement sur des bâtiments courants (vent ou séisme) beaucoup plus rapidement qu'avec les logiciels de calcul classiques par éléments finis, en avant-projet comme en exécution.
        </p>
      </section>

      <section className="main-content-section">
        <h3 className="main-content-title">
          <span className="epicentre">épicentre</span> pourquoi pas vous ?
        </h3>
        <p className="main-content-text">
          <span className="epicentre">épicentre</span> met à votre disposition un ensemble d'outils sans équivalents pour le calcul des bâtiments contreventés par des murs en béton ou en maçonnerie.
          <br />
          Vérifiez par vous-même les très bonnes performances du logiciel en demandant un <a href="#">prêt d'évaluation</a>.
        </p>
      </section>
    </article>
  </>
);

/**
 * Export
 */

export default Eurocodes;
