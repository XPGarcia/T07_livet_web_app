import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { hasRole } from "../Store/auth";

import Login from "../Pages/Login/Login";
import Protected from "../Utils/Protected";
import Landing from "../Pages/Home/Landing";
import Roles from "../Utils/Roles";
import SecretaryRouter from "./Secretary/SecretaryRouter";
import DoctorRouter from "./Doctor/DoctorRouter";

function Router() {
  const isAuthenticated = useSelector(
    (state) => state.sessionReducer.authenticated
  );

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <Protected>
                <Landing />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      {hasRole(Roles.SECRETARY) && <SecretaryRouter />}
      {hasRole(Roles.DOCTOR) && <DoctorRouter />}
    </BrowserRouter>
  );
}

export default Router;
