import React from 'react';

import './styles.scss';

function Header({ title }) {

  return (
    <header id="header">
        <h1>{title}</h1>
    </header>
  );
}
export default Header;
