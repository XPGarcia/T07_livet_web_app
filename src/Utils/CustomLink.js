import React from 'react';
import { NavLink } from 'react-router-dom';

import { checkSession } from '../Store/auth';

function CustomLink(props) {
  return (
    <NavLink
      to={props.to}
      style={props.style}
      onClick={checkSession}
    >
      {props.children}
    </NavLink>
  );
}

export default CustomLink;