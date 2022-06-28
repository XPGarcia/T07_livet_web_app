import React from "react";
import Calendar from "../../Components/Calendar/Calendar";
import SidebarLayout from "../../Layouts/SidebarLayout";
import CreateAppointmentFloatingButton from "../../Components/CreateAppointmentFloatingButton/CreateAppointmentFloatingButton";

function Schedule() {
  return (
    <SidebarLayout>
      <Calendar />
      <CreateAppointmentFloatingButton />
    </SidebarLayout>
  );
}

export default Schedule;
