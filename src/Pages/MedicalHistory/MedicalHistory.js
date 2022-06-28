import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import getMedicalRecords from "../../Services/medicalRecordService";
import { formatSimpleDate } from "../../Utils/Dates";
import MedicalRecord from "../MedicalAppointment/MedicalRecord";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`medical-historypanel-${index}`}
      aria-labelledby={`medical-history-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `medical-history-${index}`,
    "aria-controls": `medical-historypanel-${index}`
  };
}

function MedicalHistory({ patient }) {
  const [value, setValue] = useState(0);
  const medicalHistory = getMedicalRecords(patient.id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          paddingTop: 2,
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
          {medicalHistory.map((data, index) => (
            <Tab
              key={data.id}
              label={formatSimpleDate(data.date)}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {medicalHistory.map((data, index) => (
        <TabPanel key={data.id} value={value} index={index}>
          <MedicalRecord storedRecord={data} viewMode />
        </TabPanel>
      ))}
    </Box>
  );
}

export default MedicalHistory;
