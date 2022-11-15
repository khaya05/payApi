import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { closeIcon, logo, menuIcon } from '../../assets';
import { links } from '../../contents';
import { ScheduleDemoBtn } from '../../components';

import '../../styles/Navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <Link to="./">
        <img src={logo} alt="log" className="logo" />
      </Link>

      <div
        className={`nav__nav-links_btn-container ${showLinks && 'show-links'}`}
      >
        {/* close menu icon */}
        <button
          type="button"
          className="hide-menu"
          onClick={() => setShowLinks(false)}
        >
          <img src={closeIcon} alt="" aria-hidden="true" />
          <span>hide menu</span>
        </button>

        {/* nav links */}
        <ul>
          {links.map(({ id, name, path }) => (
            <li key={id}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>

        {/* demo btn */}
        <div className="nav__demo-btn-container">
          <ScheduleDemoBtn />
        </div>
      </div>

      <button
        type="button"
        className="show-menu"
        onClick={() => setShowLinks(true)}
      >
        <img src={menuIcon} alt="" aria-hidden="true" />
        <span>show menu</span>
      </button>
    </nav>
  );
}

export default Navbar;
