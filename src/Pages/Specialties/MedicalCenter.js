import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../../Layouts/SidebarLayout";

export default function MedicalCenter() {
  const navigate = useNavigate();
  const [establecimiento, setSelected] = useState("");
  function handleChange(event) {
    setSelected(event.target.value);
  }
  const navigateToCardiologySauces = () => {
    navigate("/citas/crearCita/centroMedico/doctorSauces");
  };
  const navigateToCardiologyDuran = () => {
    navigate("/citas/crearCita/centroMedico/doctorDuran");
  };
  const navigateToCrearCita = () => {
    // 👇️ navigate to /crearCita
    navigate("/citas/crearCita");
    // navigate("/citas/crearCita/centroMedico/cardiologoSauces");
  };

  return (
    <SidebarLayout>
      <Box m={1} display="flex" alignItems="left">
        <ArrowBackIosIcon
          onClick={navigateToCrearCita}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <FormControl sx={{ m: 1, minWidth: 175 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Establecimiento
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={establecimiento}
          label="Establecimiento"
          onChange={handleChange}
        >
          <MenuItem onClick={navigateToCardiologySauces}>Sauces</MenuItem>
          <MenuItem onClick={navigateToCardiologyDuran}>Durán</MenuItem>
        </Select>
      </FormControl>
    </SidebarLayout>
  );
}
