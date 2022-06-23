import React from "react";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import { pickSpecialtyColor } from "../../Utils/Specialties";

function Appointment({ children, style, ...restProps }) {
  const color = pickSpecialtyColor(restProps.data.code);

  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: color,
        borderRadius: "8px"
      }}
    >
      {children}
    </Appointments.Appointment>
  );
}

export default Appointment;
