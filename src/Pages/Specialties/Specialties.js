import React from "react";
import Box from "@mui/material/Box";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SidebarLayout from "../../Layouts/SidebarLayout";
import SpecialtyList, { pickColor } from "../../Utils/Specialties";
import CustomButton from "../../UI/CustomButton/CustomButton";
import { appointmentActions } from "../../Store/appointment";

function Specialties() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = { specialty: "" };

  const navigateToCentroMedico = (code) => {
    dispatch(appointmentActions.setSpecialty(code));
    params.specialty = code;
    // 👇️ navigate to /crearCita
    navigate({
      pathname: "/citas/crearCita/centroMedico",
      search: `?${createSearchParams(params)}`
    });
  };

  return (
    <SidebarLayout>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <h2>¿En cuál especialidad desea agendar una cita?</h2>
      </Box>
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
        {Object.keys(SpecialtyList).map((key) => (
          <CustomButton
            key={key}
            color={pickColor(SpecialtyList[key].code)}
            className="crearButton"
            onClick={() => navigateToCentroMedico(key)}
          >
            {SpecialtyList[key].name}
          </CustomButton>
        ))}
      </Box>
    </SidebarLayout>
  );
}

export default Specialties;
