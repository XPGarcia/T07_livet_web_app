import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { hasRole } from "../../Store/auth";
import Roles from "../../Utils/Roles";
import Preparation from "./MedicalRecordComponents/Preparation";
import ConsultationReasons from "./MedicalRecordComponents/ConsultationReasons";
import BackgrounData from "./MedicalRecordComponents/BackgroundData";
import CurrentProblem from "./MedicalRecordComponents/CurrentProblem";
import PhysicalExam from "./MedicalRecordComponents/PhysicalExam";
import OrganSystemReview from "./MedicalRecordComponents/OrganSystemReview";
import Diagnostic from "./MedicalRecordComponents/Diagnostic";
import Treatment from "./MedicalRecordComponents/Treatment";

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
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

function OnlyDoctorTab({ ...props }) {
  if (hasRole(Roles.DOCTOR)) {
    return <Tab {...props} />;
  }
}

function MedicalRecord({ storedRecord, viewMode }) {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up("md"));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: { md: "flex" },
        height: "100%",
        padding: "16px 0",
        width: "100%",
        maxWidth: "100%"
      }}
    >
      <Tabs
        orientation={isDesktopView ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="report tabs"
        sx={{
          borderRight: isDesktopView ? 1 : 0,
          borderBottom: isDesktopView ? 0 : 1,
          borderColor: "divider"
        }}
      >
        <Tab label="Preparación" {...a11yProps(0)} />
        <OnlyDoctorTab label="Motivo de Consulta" {...a11yProps(1)} />
        <OnlyDoctorTab label="Antecedentes" {...a11yProps(2)} />
        <OnlyDoctorTab label="Problema actual" {...a11yProps(3)} />
        <OnlyDoctorTab label="Examen Físico" {...a11yProps(4)} />
        <OnlyDoctorTab label="Revisión de Sistemas" {...a11yProps(5)} />
        <OnlyDoctorTab label="Diagnóstico" {...a11yProps(6)} />
        <OnlyDoctorTab label="Tratamiento" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Preparation data={storedRecord?.preparation} viewMode={viewMode} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConsultationReasons
          data={storedRecord?.consultationReasons}
          viewMode={viewMode}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BackgrounData
          data={storedRecord?.backgroundData}
          viewMode={viewMode}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CurrentProblem
          data={storedRecord?.currentProblem}
          viewMode={viewMode}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PhysicalExam data={storedRecord?.physicalExam} viewMode={viewMode} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <OrganSystemReview
          data={storedRecord?.organSystemReview}
          viewMode={viewMode}
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Diagnostic data={storedRecord?.diagnostic} viewMode={viewMode} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Treatment
          storedDiagnostic={storedRecord?.diagnostic}
          storedTreatment={storedRecord?.treatment}
          viewMode={viewMode}
        />
      </TabPanel>
    </Box>
  );
}

export default MedicalRecord;
