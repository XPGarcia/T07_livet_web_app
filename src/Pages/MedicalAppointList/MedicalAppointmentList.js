import React from "react";
import SidebarLayout from "../../Layouts/SidebarLayout";
import MedicalAppointmentCard from "./MedicalAppointmentCard.";
import MedicalAppointmentRow from "./MedicalAppointmentRow";

const appointmentList = [
  {
    id: 1,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-17T12:30",
    endDate: "2022-06-17T13:00",
    title: "Cardiología",
    code: "cardiology"
  },
  {
    id: 2,
    patient: "MelGibson",
    doctor: "Doctor Luis",
    startDate: "2022-06-17T13:30",
    endDate: "2022-06-17T14:00",
    title: "Cardiología",
    code: "cardiology"
  },
  {
    id: 3,
    patient: "Chiqui",
    doctor: "Doctor Luis",
    startDate: "2022-06-18T12:00",
    endDate: "2022-06-18T12:30",
    title: "Cardiología",
    code: "cardiology"
  },
  {
    id: 4,
    patient: "Daniel García",
    doctor: "Doctor Luis",
    startDate: "2022-06-19T09:30",
    endDate: "2022-06-19T10:00",
    title: "Cardiología",
    code: "cardiology"
  }
];

function MedicalAppointmentList() {
  return (
    <SidebarLayout>
      <h2>Siguiente consulta:</h2>
      <MedicalAppointmentCard
        appointment={appointmentList[0]}
        style={{ margin: "auto" }}
      />
      <h2>Próximas consultas:</h2>
      {appointmentList.map((appointment) => (
        <MedicalAppointmentRow key={appointment.id} appointment={appointment} />
      ))}
    </SidebarLayout>
  );
}

export default MedicalAppointmentList;
