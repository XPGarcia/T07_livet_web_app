import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Landing from "../../Pages/Home/Landing";
import Protected from "../../Utils/Protected";
import PacientList from "../../Pages/Pacients/PacientList";
import MedicalAppointment from "../../Pages/MedicalAppointment/MedicalAppointment";

function DoctorRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/consultas"
        element={
          <Protected>
            <MedicalAppointment />
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

export default DoctorRouter;
