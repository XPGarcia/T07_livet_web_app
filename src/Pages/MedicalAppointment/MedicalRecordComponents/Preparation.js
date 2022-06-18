import { Box, Divider, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

function PreparationTextField({ id, label, unitLabel }) {
  return (
    <Grid item p={1} xs={12} lg={6}>
      <TextField
        id={id}
        label={label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{unitLabel}</InputAdornment>
          )
        }}
        fullWidth
      />
    </Grid>
  );
}

function Preparation() {
  return (
    <Box>
      <h4>Signos Vitales</h4>
      <Grid container>
        <PreparationTextField
          id="bloodPressure"
          label="Tensión Arterial"
          unitLabel="mmhg"
        />
        <PreparationTextField
          id="heartRate"
          label="Frecuencia Cardiaca"
          unitLabel="lpm"
        />
        <PreparationTextField
          id="breathingFrequency"
          label="Frecuencia Respiratoria"
          unitLabel="rpm"
        />
        <PreparationTextField
          id="temperature"
          label="Temperatura"
          unitLabel="C"
        />
        <PreparationTextField
          id="oxygenSaturation"
          label="Saturación de Oxígeno"
          unitLabel="%"
        />
      </Grid>
      <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
      <Grid container>
        <PreparationTextField id="height" label="Altura" unitLabel="cm" />
        <PreparationTextField id="weight" label="Peso" unitLabel="Kg" />
      </Grid>
    </Box>
  );
}

export default Preparation;
