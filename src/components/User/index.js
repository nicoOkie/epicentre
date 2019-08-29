/**
 * NPM Import
 */
import React, { useState } from 'react';

/**
 * Local Import
 */
import './user.scss';

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
    <div>{getUrl}</div>
  );
};

/**
 * Export
 */

export default User;
