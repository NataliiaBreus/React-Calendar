import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavItem.module.sass';
import PropTypes from 'prop-types';

function NavItem ({className, activeClassName, children, ...other}) {
  return (
    <li>
      <NavLink className = {style.navLink, className} activeClassName = {style.navLinkActive} {...other}>{children}</NavLink>
    </li>
  );
}