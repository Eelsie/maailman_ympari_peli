import React from 'react';
import {Link} from 'react-router';
import brain from '../img/brain.svg';


const Footer = () =>  {
  return (
    <footer className="xs-p-30">
      {/* <Link to="/alypaa"><img className="alypaa-link xs-p-10 right" src={brain} role="presentation"/></Link> */}
      <Link to="/alypaa"><object id="alypaa" className="alypaa-link xs-p-10 right" data={brain} type="image/svg+xml" ></object></Link>
      <p className="credits">Credits</p>
    </footer>
  );
}

export default Footer;
