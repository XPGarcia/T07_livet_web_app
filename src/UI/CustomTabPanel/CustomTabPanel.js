import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
          onChange={handleChange}
          aria-label="tabs"
          allowScrollButtonsMobile
        >
          <Tab label="Consulta" {...a11yProps(0)} />
          <Tab label="Paciente" {...a11yProps(1)} />
          <Tab label="Historial Médico" {...a11yProps(2)} />
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
