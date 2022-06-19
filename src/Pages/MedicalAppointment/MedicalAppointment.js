import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import CustomTabPanel from "../../UI/CustomTabPanel/CustomTabPanel";
import PatientGeneralData from "../../Components/PatientGeneralData/PatientGeneralData";
import MedicalRecord from "./MedicalRecord";
import Preparation from "./MedicalRecordComponents/Preparation";
import ConsultationReasons from "./MedicalRecordComponents/ConsultationReasons";
import BackgrounData from "./MedicalRecordComponents/BackgroundData";
import CurrentProblem from "./MedicalRecordComponents/CurrentProblem";
import PhysicalExam from "./MedicalRecordComponents/PhysicalExam";
import OrganSystemReview from "./MedicalRecordComponents/OrganSystemReview";
import Diagnostic from "./MedicalRecordComponents/Diagnostic";
import Treatment from "./MedicalRecordComponents/Treatment";

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
            style={{ margin: "auto", maxWidth: "1024px", marginTop: "24px" }}
          />
        }
        medicalRecordComponent={
          <MedicalRecord
            preparationComponent={<Preparation />}
            consultationReasonsComponent={<ConsultationReasons />}
            backgroundDataComponent={<BackgrounData />}
            currentProblemComponent={<CurrentProblem />}
            physicalExamComponent={<PhysicalExam />}
            organSystemReviewComponent={<OrganSystemReview />}
            diagnosticComponent={<Diagnostic />}
            treatmentComponent={<Treatment />}
          />
        }
      />
    </SidebarLayout>
  );
}

export default MedicalAppointment;
