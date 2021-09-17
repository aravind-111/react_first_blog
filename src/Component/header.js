import React from 'react';
import { FaReact } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <FaReact style={{ height: '50px', width: '50px' }} />
        </Link>
        <ul className="nav">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
