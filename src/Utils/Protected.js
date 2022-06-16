import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const isAuthenticated = useSelector(
    (state) => state.sessionReducer.authenticated
  );

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
}

export default Protected;
