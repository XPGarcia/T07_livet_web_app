import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import FormPaciente from "../../Components/FormPaciente/FormPaciente";

export default function PacientCreate() {
  return (
    <SidebarLayout>
      <div style={{ textAlign: "center" }}>
        <h1>Registrar Paciente</h1>
      </div>
      <FormPaciente />
    </SidebarLayout>
  );
}
