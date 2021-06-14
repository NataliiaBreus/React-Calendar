import React from 'react';
import style from './Header.module.sass';
import { NavLink } from 'react-router-dom';

function Header () {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.wrapper}>
          <li>
            <NavLink className={style.text} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={style.text} to='/contacts'>Contacts</NavLink>
          </li>
          <li>
            <NavLink className={style.text} to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
