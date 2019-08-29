/**
 * NPM Import
 */
import React, { useState } from 'react';

/**
 * Local Import
 */
import './user.scss';
import Licences from './Licences';
import Description from './Description';
import Suggest from './Suggest';

/**
 * Code
 */
const User = () => {
  const pageURL = document.location.pathname;
  const [getUrl, setUrl] = useState(pageURL);

  if (getUrl !== pageURL) {
    setUrl(pageURL);
  }

  return (
    <>
      {getUrl.includes('licences') && <Licences />}
      {getUrl.includes('description') && <Description />}
      {getUrl.includes('sugestions') && <Suggest />}
    </>
  );
};

/**
 * Export
 */

export default User;
