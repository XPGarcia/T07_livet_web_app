import React from "react";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function ButtonCita() {
  const navigate = useNavigate();

  const navigateToCita = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas/crearCita");
  };

  return (
    <Box m={1} display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        onClick={navigateToCita}
        className="crearButton"
      >
        Crear cita
      </Button>
    </Box>
  );
}

export default ButtonCita;
