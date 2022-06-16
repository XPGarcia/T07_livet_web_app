import React from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import { useNavigate } from "react-router-dom";
import classes from "./FloatingButton.module.css";

function FloatingButton() {
  const navigate = useNavigate();

  const navigateToCita = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas/crearCita");
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
          onClick={navigateToCita}
          aria-label="crear cita"
        >
          <CreateIcon color="white" sx={{ mr: 1 }} />
          Crear cita
        </Fab>
      </Zoom>
    </Tooltip>
  );
}

export default FloatingButton;
