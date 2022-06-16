import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../../Layouts/SidebarLayout";

function Specialties() {
  const navigate = useNavigate();

  const navigateToCentroMedico = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas/crearCita/centroMedico");
  };
  const navigateToCitas = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas");
  };

  return (
    <SidebarLayout>
      <Box m={1} display="flex" alignItems="left">
        <ArrowBackIosIcon
          onClick={navigateToCitas}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <h2>¿En cuál especialidad desea agendar una cita?</h2>
      <Box
        display="grid"
        gap={2}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          }
        }}
      >
        <Button
          variant="contained"
          className="crearButton"
          onClick={navigateToCentroMedico}
          sx={{ color: "White", backgroundColor: "#5CB85C" }}
        >
          Medicina General
        </Button>
        <Button
          variant="contained"
          className="crearButton"
          onClick={navigateToCentroMedico}
          sx={{ color: "White", backgroundColor: "#D9534F" }}
        >
          Cardiología
        </Button>
        <Button
          variant="contained"
          className="crearButton"
          onClick={navigateToCentroMedico}
          sx={{ color: "White", backgroundColor: "#F0AD4E" }}
        >
          Ginecología
        </Button>
        <Button
          variant="contained"
          className="crearButton"
          onClick={navigateToCentroMedico}
          sx={{ color: "White", backgroundColor: "#E26DC9" }}
        >
          Pediatría
        </Button>
        <Button
          variant="contained"
          className="crearButton"
          onClick={navigateToCentroMedico}
          sx={{ color: "White", backgroundColor: "#714BC3" }}
        >
          Terapia de sueros
        </Button>
      </Box>
    </SidebarLayout>
  );
}

export default Specialties;
