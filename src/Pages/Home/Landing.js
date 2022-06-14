import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Landing(props) {
  const isAuthenticated = useSelector(state => state.sessionReducer.authenticated);

  if (!isAuthenticated)
    return <Navigate to="/login" replace />;

  return <Navigate to="/home" replace />;
}

export default Landing;