import React from 'react';
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import styles from './CustomLink.module.css';


function CustomLink({children, to, ...props}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link 
      className={`${styles['link']} ${match && 'active'}`}
      to={to}
      {...props}
    >
    {children}
    </Link>
  );
}

export default CustomLink;