import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../../Pages/Home/Home';
import Schedule from '../../Pages/Schedule/Schedule';
import PacientList from '../../Pages/Pacients/PacientList';

function SecreatryRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="citas" element={<Schedule />} />
        <Route path="pacientes" element={<PacientList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SecreatryRouter;