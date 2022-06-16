import React from "react";
import { NavLink } from "react-router-dom";

import { checkSession } from "../Store/auth";

function CustomLink(props) {
  const { to, style, children } = props;
  return (
    <NavLink to={to} style={style} onClick={checkSession}>
      {children}
    </NavLink>
  );
}

export default CustomLink;
