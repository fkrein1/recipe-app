import React from 'react';
import './styles.scss';

function Header({ title }) {
  return (
    <header id="header">
      <h2>{title}</h2>
    </header>
  );
}
export default Header;
