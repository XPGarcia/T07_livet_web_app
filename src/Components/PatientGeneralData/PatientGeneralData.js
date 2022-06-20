import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import LabeledData from "../LabeledData/LabeledData";

function PatientGeneralData({ patient, style }) {
  return (
    <Card variant="outlined" style={style}>
      <CardContent sx={{ padding: { xs: "24px 10px", md: "24px 36px" } }}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <h4>Datos Generales del Paciente</h4>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <LabeledData label="Nombre" data={patient.name} />
              <LabeledData label="Cédula" data={patient.ssn} />
              <LabeledData
                label="Fecha de Nacimiento"
                data={new Date(patient.birthDate).toLocaleDateString()}
              />
              <LabeledData label="Género" data={patient.gender} />
              <LabeledData label="Estado Civil" data={patient.civilStatus} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <LabeledData label="Email" data={patient.email} />
              <LabeledData label="Teléfono" data={patient.cellphone} />
              <LabeledData label="Provincia" data={patient.state} />
              <LabeledData label="Ciudad" data={patient.city} />
              <LabeledData label="Dirección" data={patient.address} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PatientGeneralData;
