import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Landing from "../../Pages/Home/Landing";
import Protected from "../../Utils/Protected";
import Specialties from "../../Pages/Specialties/Specialties";
import MedicalCenter from "../../Pages/Specialties/MedicalCenter";

import Schedule from "../../Pages/Schedule/Schedule";
import PacientList from "../../Pages/Pacients/PacientList";

function SecretaryRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/citas"
        element={
          <Protected>
            <Schedule />
          </Protected>
        }
      />
      <Route
        path="/citas/crearCita"
        element={
          <Protected>
            <Specialties />
          </Protected>
        }
      />
      <Route
        path="/citas/crearCita/centroMedico"
        element={
          <Protected>
            <MedicalCenter />
          </Protected>
        }
      />
      <Route
        path="/pacientes"
        element={
          <Protected>
            <PacientList />
          </Protected>
        }
      />
      <Route
        path="*"
        element={
          <Protected>
            <Landing />
          </Protected>
        }
      />
    </Routes>
  );
}

export default SecretaryRouter;
