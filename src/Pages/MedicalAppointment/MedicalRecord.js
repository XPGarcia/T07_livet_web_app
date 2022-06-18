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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

function MedicalRecord({
  preparationComponent,
  consultationReasonsComponent,
  backgroundDataComponent,
  currentProblemComponent,
  physicalExamComponent
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%"
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="report tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Preparación" {...a11yProps(0)} />
        <Tab label="Motivos de Consulta" {...a11yProps(1)} />
        <Tab label="Antecedentes" {...a11yProps(2)} />
        <Tab label="Problema actual" {...a11yProps(3)} />
        <Tab label="Examen Físico" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {preparationComponent}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {consultationReasonsComponent}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {backgroundDataComponent}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {currentProblemComponent}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {physicalExamComponent}
      </TabPanel>
    </Box>
  );
}

export default MedicalRecord;
