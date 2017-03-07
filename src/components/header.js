import React from 'react';
import {Link} from 'react-router';

import logo from '../img/plan-logo.svg';
import pass from '../img/pass.svg';
import map from '../img/map.svg';


const Header = () =>  {
  return (
    <header className="xs-p-30">
      <Link to="/"><img className="logo xs-mr-30" src={logo} role="presentation"/></Link>
      <h1>Maailman ympäri</h1>
      <img className="pass right xs-ml-40" src={pass} role="presentation"/>
      <img className="map right" src={map} role="presentation"/>
    </header>
  );
}

export default Header;
