import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import FormPaciente from "../../Components/FormPaciente/FormPaciente";

function RegistrarPaciente() {
  return (
    <SidebarLayout>
      <div style={{ textAlign: "center" }}>
        <h1>Registrar paciente</h1>
      </div>
      <FormPaciente />
    </SidebarLayout>
  );
}
export default RegistrarPaciente;
