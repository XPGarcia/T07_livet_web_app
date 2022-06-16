import React from "react";
import Calendar from "../../Components/Calendar/Calendar";
import SidebarLayout from "../../Layouts/SidebarLayout";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";

function Schedule() {
  return (
    <SidebarLayout>
      <Calendar />
      <FloatingButton />
    </SidebarLayout>
  );
}

export default Schedule;
