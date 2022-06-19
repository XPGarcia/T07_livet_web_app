import React from "react";
import Box from "@mui/material/Box";
import SidebarLayout from "../../../Layouts/SidebarLayout";
import DoctorData from "../../../Components/DoctorData/DoctorData";

const doctorList = [
  {
    specialties: "Doctor",
    name: "Anthony Larrea"
  },
  {
    specialties: "Doctor",
    name: "David Zambrano"
  }
];

function CardiologistSauces() {
  return (
    <SidebarLayout>
      <Box
        display="grid"
        gap={1}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)"
          },
          alignItem: "center"
        }}
      >
        {doctorList.map((doctor) => (
          <DoctorData
            doctor={doctor}
            style={{
              margin: "40px",
              maxWidth: "1024px",
              display: "grid",
              backgroundColor: "26B1FF",
              gridTemplateColumns: "repeat(2, 0.5fr)",
              alignItems: "center",
              alignContent: "center"
            }}
          />
        ))}
      </Box>
    </SidebarLayout>
  );
}

export default CardiologistSauces;
