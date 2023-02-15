import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `link ${isActive ? styles.active : styles.link}`
            }
            to="/"
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `link ${isActive ? styles.active : styles.link}`
            }
            to="contato"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
