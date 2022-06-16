import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { hasRole } from "../../Store/auth";
import Roles from "../../Utils/Roles";

function Landing() {
  const isAuthenticated = useSelector(
    (state) => state.sessionReducer.authenticated
  );

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (hasRole(Roles.SECRETARY)) return <Navigate to="/citas" replace />;

  if (hasRole(Roles.DOCTOR)) return <Navigate to="/consultas" replace />;
}

export default Landing;
