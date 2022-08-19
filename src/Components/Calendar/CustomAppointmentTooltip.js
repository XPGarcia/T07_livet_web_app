import React from "react";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import TooltipContent from "./TooltipContent";

function CustomAppointmentTooltip() {
  return (
    <AppointmentTooltip
      contentComponent={TooltipContent}
      showCloseButton
      showDeleteButton
    />
  );
}

export default CustomAppointmentTooltip;
