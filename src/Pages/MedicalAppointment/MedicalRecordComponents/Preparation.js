import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { preparationActions } from "../../../Store/MedicalRecord/preparation";
import { hasRole } from "../../../Store/auth";
import Roles from "../../../Utils/Roles";

function PreparationTextField({
  id,
  label,
  value,
  unitLabel,
  changeHandler,
  viewMode
}) {
  return (
    <Grid item p={1} xs={12} lg={4}>
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
        disabled={viewMode}
      />
    </Grid>
  );
}

function Preparation({ data, viewMode }) {
  const dispatch = useDispatch();
  let preparation = useSelector((state) => state.preparation);
  const navigate = useNavigate();

  if (viewMode && data) {
    preparation = data;
  }

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
          viewMode={viewMode}
        />
        <PreparationTextField
          id="heartRate"
          label="Frecuencia Cardiaca"
          unitLabel="lpm"
          value={preparation.heartRate}
          changeHandler={setHeartRate}
          viewMode={viewMode}
        />
        <PreparationTextField
          id="breathingFrequency"
          label="Frecuencia Respiratoria"
          unitLabel="rpm"
          value={preparation.breathingFrequency}
          changeHandler={setBreathingFrequency}
          viewMode={viewMode}
        />
        <PreparationTextField
          id="temperature"
          label="Temperatura"
          unitLabel="C"
          value={preparation.temperature}
          changeHandler={setTemperature}
          viewMode={viewMode}
        />
        <PreparationTextField
          id="oxygenSaturation"
          label="Saturación de Oxígeno"
          unitLabel="%"
          value={preparation.oxygenSaturation}
          changeHandler={setOxygenSaturation}
          viewMode={viewMode}
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
          viewMode={viewMode}
        />
        <PreparationTextField
          id="weight"
          label="Peso"
          unitLabel="Kg"
          value={preparation.weight}
          changeHandler={setWeight}
          viewMode={viewMode}
        />
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 1,
          paddingTop: 3
        }}
      >
        {hasRole(Roles.SECRETARY) && !viewMode && (
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate("/citas")}
          >
            Guardar
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Preparation;
