import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isMobile = window.innerWidth <= 500;
  const [expanded, setExpanded] = useState(isMobile);
  const collapseNav = `${expanded ? 'collapse' : ''} navbar-collapse`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={collapseNav}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
