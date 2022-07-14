import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Landing from "../../Pages/Landing/Landing";
import Protected from "../../Utils/Protected";
import Specialties from "../../Pages/Specialties/Specialties";
import MedicalCenterDoctors from "../../Pages/MedicalCenterDoctors/MedicalCenterDoctors";
import Schedule from "../../Pages/Schedule/Schedule";
import PacientList from "../../Pages/Pacients/PacientList";
import PacientCreate from "../../Pages/Pacients/PacientCreate";
import ChoosePatient from "../../Pages/ChoosePatient/ChoosePatient";
import MedicalAppointment from "../../Pages/MedicalAppointment/MedicalAppointment";
import DoctorScheduler from "../../Pages/DoctorScheduler/DoctorScheduler";

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
        path="/citas/especialidades"
        element={
          <Protected>
            <Specialties />
          </Protected>
        }
      />
      <Route
        path="/citas/especialidades/centros"
        element={
          <Protected>
            <MedicalCenterDoctors />
          </Protected>
        }
      />
      <Route
        path="/citas/especialidades/centros/crear"
        element={
          <Protected>
            <ChoosePatient />
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
        path="/pacientes/registrar"
        element={
          <Protected>
            <PacientCreate />
          </Protected>
        }
      />
      <Route
        path="/doctores"
        element={
          <Protected>
            <DoctorScheduler />
          </Protected>
        }
      />
      <Route
        path="/consultas/:id"
        element={
          <Protected>
            <MedicalAppointment />
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
