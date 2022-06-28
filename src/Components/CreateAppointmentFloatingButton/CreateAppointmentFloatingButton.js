import React from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import { useNavigate } from "react-router-dom";
import classes from "./CreateAppointmentFloatingButton.module.css";

function CreateAppointmentFloatingButton() {
  const navigate = useNavigate();

  const navigateToSpecialties = () => {
    navigate("/citas/especialidades");
  };

  return (
    <Tooltip
      className={classes.floatingBtn}
      TransitionComponent={Zoom}
      title="Crear cita"
    >
      <Zoom in timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          variant="extended"
          color="primary"
          onClick={navigateToSpecialties}
          aria-label="crear cita"
        >
          <CreateIcon color="white" sx={{ mr: 1 }} />
          Crear cita
        </Fab>
      </Zoom>
    </Tooltip>
  );
}

export default CreateAppointmentFloatingButton;
