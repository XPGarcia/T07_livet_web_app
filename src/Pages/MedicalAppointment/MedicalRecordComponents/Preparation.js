import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Divider, Grid, InputAdornment, TextField } from "@mui/material";
import { preparationActions } from "../../../Store/MedicalRecord/preparation";

function PreparationTextField({ id, label, value, unitLabel, changeHandler }) {
  return (
    <Grid item p={1} xs={12} lg={6}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={(event) => changeHandler(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{unitLabel}</InputAdornment>
          )
        }}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
}

function Preparation() {
  const dispatch = useDispatch();
  const preparation = useSelector((state) => state.preparation);

  const setBloodPressure = (bloodPressure) =>
    dispatch(preparationActions.setBloodPressure(bloodPressure));

  const setHeartRate = (heartRate) =>
    dispatch(preparationActions.setHeartRate(heartRate));

  const setBreathingFrequency = (breathingFrequency) =>
    dispatch(preparationActions.setBreathingFrequency(breathingFrequency));

  const setTemperature = (temperature) =>
    dispatch(preparationActions.setTemperature(temperature));

  const setOxygenSaturation = (oxygenSaturation) =>
    dispatch(preparationActions.setOxygenSaturation(oxygenSaturation));

  const setHeight = (height) => dispatch(preparationActions.setHeight(height));

  const setWeight = (weight) => dispatch(preparationActions.setWeight(weight));

  return (
    <Box>
      <h4>Signos Vitales</h4>
      <Grid container>
        <PreparationTextField
          id="bloodPressure"
          label="Tensión Arterial"
          unitLabel="mmhg"
          value={preparation.bloodPressure}
          changeHandler={setBloodPressure}
        />
        <PreparationTextField
          id="heartRate"
          label="Frecuencia Cardiaca"
          unitLabel="lpm"
          value={preparation.heartRate}
          changeHandler={setHeartRate}
        />
        <PreparationTextField
          id="breathingFrequency"
          label="Frecuencia Respiratoria"
          unitLabel="rpm"
          value={preparation.breathingFrequency}
          changeHandler={setBreathingFrequency}
        />
        <PreparationTextField
          id="temperature"
          label="Temperatura"
          unitLabel="C"
          value={preparation.temperature}
          changeHandler={setTemperature}
        />
        <PreparationTextField
          id="oxygenSaturation"
          label="Saturación de Oxígeno"
          unitLabel="%"
          value={preparation.oxygenSaturation}
          changeHandler={setOxygenSaturation}
        />
      </Grid>
      <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
      <Grid container>
        <PreparationTextField
          id="height"
          label="Altura"
          unitLabel="cm"
          value={preparation.height}
          changeHandler={setHeight}
        />
        <PreparationTextField
          id="weight"
          label="Peso"
          unitLabel="Kg"
          value={preparation.weight}
          changeHandler={setWeight}
        />
      </Grid>
    </Box>
  );
}

export default Preparation;
