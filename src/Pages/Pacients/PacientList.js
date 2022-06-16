import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import TablePacient from "../../Components/TablePacient/TablePacient";

function PacientList() {
  return (
    <SidebarLayout>
      <div style={{ textAlign: "center" }}>
        <h1>Fichas Médicas de Pacientes</h1>
      </div>
      <TablePacient />
    </SidebarLayout>
  );
}

export default PacientList;
