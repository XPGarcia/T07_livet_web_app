import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';

import { hasRole } from '../Store/auth';

import Login from '../Pages/Login/Login';
import Protected from '../Utils/Protected';
import Landing from '../Pages/Home/Landing';
import Roles from '../Utils/Roles';
import { SecretaryRoutes } from './SecretaryRoutes';

function Router(props) {
  const isAuthenticated = useSelector(state => state.sessionReducer.authenticated);

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Protected><Landing /></Protected>} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      {hasRole(Roles.SECRETARY) && <SecretaryRoutes />}
      {hasRole(Roles.DOCTOR) && <SecretaryRoutes />}
    </BrowserRouter>
  );

}

export default Router;