import React from 'react';
import {Link} from 'react-router';


const Footer = () =>  {
  return (
    <footer className="xs-p-30">
      <button className="btn btn--orange alypaa-link xs-p-10 right"><Link to="/alypaa">Älypää</Link></button>
      <p className="">Credits</p>
    </footer>
  );
}

export default Footer;
