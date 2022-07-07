import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={(navData) => (navData.isActive ? 'active-link' : 'none')} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
