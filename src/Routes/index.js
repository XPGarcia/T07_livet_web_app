import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

import Login from '../Pages/Login/Login';
import Roles from '../Utils/Roles';

import PacientList from '../Pages/Pacients/PacientList';
import Schedule from '../Pages/Schedule/Schedule';
import Home from '../Pages/Home/Home';
import Protected from '../Utils/Protected';
import Specialties from '../Pages/Specialties/Specialties';
import MedicalCenter from '../Pages/Specialties/MedicalCenter';

function Router(props) {
  const isAuthenticated = useSelector(state => state.sessionReducer.authenticated);

  const session = JSON.parse(localStorage.getItem("redux-react-session/USER-SESSION"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Secretary Routes */}
        {(isAuthenticated && session['role'] === Roles.SECRETARY) && <Route path="/" element={<Protected><Home /></Protected>} />}
        {(isAuthenticated && session['role'] === Roles.SECRETARY) && <Route path="/citas" element={<Protected><Schedule /></Protected>} />}
        {(isAuthenticated && session['role'] === Roles.SECRETARY) && <Route path="/pacientes" element={<Protected><PacientList /></Protected>} />}
        {(isAuthenticated && session['role'] === Roles.SECRETARY) && <Route path="/crearCita" element={<Protected><Specialties /></Protected>} />}
        {(isAuthenticated && session['role'] === Roles.SECRETARY) && <Route path="/crearCita/centroMedico" element={<Protected><MedicalCenter /></Protected>} />}
        {/* Doctor Routes */}
        {(isAuthenticated && session['role'] === Roles.DOCTOR) && <Route path="/" element={<Protected><Home /></Protected>} />}
        {(isAuthenticated && session['role'] === Roles.DOCTOR) && <Route path="/pacientes" element={<Protected><PacientList /></Protected>} />}
        <Route path="*" element={<Protected><Home /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;