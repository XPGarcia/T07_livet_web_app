import React from "react";
import Box from "@mui/material/Box";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SidebarLayout from "../../Layouts/SidebarLayout";
import SpecialtyList, { pickSpecialtyColor } from "../../Utils/Specialties";
import CustomButton from "../../UI/CustomButton/CustomButton";
import { appointmentActions } from "../../Store/appointment";

function Specialties() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = { specialty: "" };

  const navigateToMedicalCenter = (key) => {
    dispatch(appointmentActions.setSpecialty(SpecialtyList[key].code));
    params.specialty = key;
    navigate({
      pathname: "/citas/especialidades/centros",
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
            color={pickSpecialtyColor(SpecialtyList[key].code)}
            className="crearButton"
            onClick={() => navigateToMedicalCenter(key)}
          >
            {SpecialtyList[key].name}
          </CustomButton>
        ))}
      </Box>
    </SidebarLayout>
  );
}

export default Specialties;
