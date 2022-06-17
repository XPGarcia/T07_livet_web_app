import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import CustomTabPanel from "../../UI/CustomTabPanel/CustomTabPanel";
import PatientGeneralData from "../../Components/PatientGeneralData/PatientGeneralData";

const patientData = {
  name: "Xavier García",
  ssn: "0912345678",
  birthDate: "1997-12-19",
  gender: "M",
  civilStatus: "Soltero",
  address: "Sauces 6 Mz 125 Villa 41",
  state: "Guayas",
  city: "Guayaquil",
  phone: "2147583",
  cellphone: "0913784698",
  email: "xavier.garcia@test.com"
};

function MedicalAppointment() {
  return (
    <SidebarLayout>
      <CustomTabPanel
        patientDataComponent={
          <PatientGeneralData
            patient={patientData}
            style={{ margin: "auto", maxWidth: "1024px" }}
          />
        }
      />
    </SidebarLayout>
  );
}

export default MedicalAppointment;
