import React from 'react';
import logo from '../img/plan-logo.svg';

const Header = () =>  {
  return (
    <header>
      <img className="logo" src={logo} role="presentation"/>
      <h2>Maailman ympäri</h2>
    </header>
  );
}

export default Header;
