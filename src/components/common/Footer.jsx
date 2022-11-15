import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { links, socials } from '../../contents';

import '../../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <figure>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </figure>
          <ul className="footer__nav-links">
            {links.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {socials.map(({ id, name, icon }) => (
            <li key={id}>
              <a href="#">
                <img src={icon} alt="name" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
