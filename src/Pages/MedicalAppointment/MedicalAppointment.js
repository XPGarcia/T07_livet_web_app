import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import SidebarLayout from "../../Layouts/SidebarLayout";
import PatientGeneralData from "../../Components/PatientGeneralData/PatientGeneralData";
import MedicalRecord from "./MedicalRecord";
import MedicalHistory from "../MedicalHistory/MedicalHistory";
import { hasRole } from "../../Store/auth";
import Roles from "../../Utils/Roles";

const patientData = {
  id: 1,
  name: "Xavier García",
  ssn: "0912345678",
  birthDate: "1997-12-19",
  gender: "M",
  civilStatus: "Soltero",
  address: "Sauces 6 Mz 125 Villa 41",
  state: "Guayas",
  city: "Guayaquil",
  phone: "2147583",
  cellphone: "0913784698",
  email: "xavier.garcia@test.com"
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`medical-tabpanel-${index}`}
      aria-labelledby={`medical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `medical-tab-${index}`,
    "aria-controls": `medical-tabpanel-${index}`
  };
}

function OnlyDoctorTab({ ...props }) {
  if (hasRole(Roles.DOCTOR)) {
    return <Tab {...props} />;
  }
}

function MedicalAppointment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SidebarLayout>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderBottom: 1,
            borderColor: "divider",
            width: "100%"
          }}
        >
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="tabs"
          >
            <Tab label="Consulta" {...a11yProps(0)} />
            <Tab label="Paciente" {...a11yProps(1)} />
            <OnlyDoctorTab label="Historial Médico" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MedicalRecord />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PatientGeneralData
            patient={patientData}
            style={{ margin: "auto", maxWidth: "1024px", marginTop: "24px" }}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MedicalHistory patient={patientData} />
        </TabPanel>
      </Box>
    </SidebarLayout>
  );
}

export default MedicalAppointment;
