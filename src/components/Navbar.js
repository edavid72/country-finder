import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-main">
        <Link className="nav-link" to="/">
          Main Page<i className="fas fa-home"></i>
        </Link>

        <Link className="nav-link" to="/searchpage">
          Search<i className="fas fa-search"></i>
        </Link>
      </div>

      <div className="nav-about">
        <Link className="nav-link" to="/aboutpage">
          About<i className="fas fa-ghost"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
