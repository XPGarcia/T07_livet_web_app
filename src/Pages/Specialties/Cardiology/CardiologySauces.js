import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../../../Layouts/SidebarLayout";
import CardiologistSauces from "../../Doctor/Cardiologist/CardiologistSauces";

export default function CardiologySauces() {
  const navigate = useNavigate();
  const navigateToCentroMedico = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas/crearCita/centroMedico");
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SidebarLayout>
      <Box m={1} display="flex" alignItems="left">
        <ArrowBackIosIcon
          onClick={navigateToCentroMedico}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <CardiologistSauces />
    </SidebarLayout>
  );
}
