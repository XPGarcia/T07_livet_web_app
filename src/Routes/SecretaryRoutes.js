import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';

import {
  Routes,
  Route
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Landing from '../Pages/Home/Landing';
import Schedule from '../Pages/Schedule/Schedule';
import Home from '../Pages/Home/Home';
import Protected from '../Utils/Protected';
import PacientList from '../Pages/Pacients/PacientList';
import Specialties from '../Pages/Specialties/Specialties';
import MedicalCenter from '../Pages/Specialties/MedicalCenter';

const secretaryRoutes = [
  {
    "name": "Home",
    "link": "/home",
    "icon": <HomeIcon />,
    "component": <Home />
  },
  {
    "name": "Citas",
    "link": "/citas",
    "icon": <EventIcon />,
    "component": <Schedule />
  },
  {
    "name": "Pacientes",
    "link": "/pacientes",
    "icon": <PeopleIcon />,
    "component": <PacientList />
  }
];

function SecretaryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      {secretaryRoutes.map((route, index) => (
        <Route key={index} path={route.link} element={<Protected>{route.component}</Protected>} />
      ))}
      <Route path="/citas/crearCita" element={<Protected><Specialties /></Protected>} />
      <Route path="/citas/crearCita/centroMedico" element={<Protected><MedicalCenter /></Protected>} />
      <Route path="*" element={<Protected><Landing /></Protected>} />
    </Routes>
  );
}

export { SecretaryRoutes, secretaryRoutes };