import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { hasRole } from "../../Store/auth";
import Roles from "../../Utils/Roles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function OnlyDoctorTab({ ...props }) {
  if (hasRole(Roles.DOCTOR)) {
    return <Tab {...props} />;
  }
}

function CustomTabPanel({ patientDataComponent, medicalRecordComponent }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
        {medicalRecordComponent}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {patientDataComponent}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Historial Médico
      </TabPanel>
    </Box>
  );
}

export default CustomTabPanel;
