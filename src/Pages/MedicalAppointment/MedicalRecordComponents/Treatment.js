import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import TreatmentList from "../../../Components/TreatmentList/TreatmentList";

function TreatmentBlock({ diagnostic, data, viewMode }) {
  const dispatch = useDispatch();
  let treatment = useSelector((state) => state.treatment);

  if (viewMode && data) {
    treatment = data;
  }

  const initialTreatmentState = {
    medicine: "",
    presentation: "",
    quantity: "",
    indications: ""
  };

  const [addTreatment, setAddTreatment] = useState(false);
  const [newTreatment, setNewTreatment] = useState(initialTreatmentState);

  const addTreatmentHandler = (event) => {
    event.preventDefault();
    const temp = treatment.data[diagnostic.id]
      ? [...treatment.data[diagnostic.id]]
      : [];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      diagnosticId: diagnostic.id,
      treatmentFields: newTreatment
    });
    dispatch(
      treatmentActions.setTreatment({
        diagnosticId: diagnostic.id,
        treatments: temp
      })
    );
    setNewTreatment(initialTreatmentState);
  };

  const deleteTreatmentHandler = (event, payload) => {
    event.preventDefault();
    const temp = treatment.data[payload.diagnosticId].filter(
      (localData) => localData.id !== payload.id
    );
    dispatch(
      treatmentActions.setTreatment({
        diagnosticId: payload.diagnosticId,
        treatments: temp
      })
    );
  };

  return (
    <Box sx={{ p: 2, mb: 2, boxShadow: 3, borderRadius: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 24px"
        }}
      >
        <h4>{diagnostic.name}</h4>
        {!addTreatment && !viewMode && (
          <Button
            variant="outlined"
            size="small"
            sx={{ height: "fit-content" }}
            startIcon={<AddIcon />}
            onClick={() => setAddTreatment(true)}
          >
            Tratamiento nuevo
          </Button>
        )}
        {addTreatment && !viewMode && (
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ height: "fit-content" }}
            startIcon={<CloseIcon />}
            onClick={() => setAddTreatment(false)}
          >
            Detener
          </Button>
        )}
      </Box>
      <TreatmentList
        data={treatment.data[diagnostic.id]}
        onDelete={deleteTreatmentHandler}
        viewMode={viewMode}
      />
      <div style={{ height: "16px" }} />
      {addTreatment && (
        <Grid container style={{ marginBottom: "16px" }}>
          <Grid item xs={12} md={4} p={1}>
            <TextField
              id="medicineInput"
              label="Medicamento"
              fullWidth
              value={newTreatment.medicine}
              onChange={(event) =>
                setNewTreatment({
                  ...newTreatment,
                  medicine: event.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={4} p={1}>
            <TextField
              id="presentationInput"
              label="Presentación/Concentración"
              fullWidth
              value={newTreatment.presentation}
              onChange={(event) =>
                setNewTreatment({
                  ...newTreatment,
                  presentation: event.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={4} p={1}>
            <TextField
              id="quantityInput"
              label="Cantidad"
              fullWidth
              value={newTreatment.quantity}
              onChange={(event) =>
                setNewTreatment({
                  ...newTreatment,
                  quantity: event.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} p={1}>
            <TextField
              id="indicationsInput"
              label="Indicaciones"
              fullWidth
              value={newTreatment.indications}
              onChange={(event) =>
                setNewTreatment({
                  ...newTreatment,
                  indications: event.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={addTreatmentHandler}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

function Treatment({ storedDiagnostic, storedTreatment, viewMode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let diagnostic = useSelector((state) => state.diagnostic);
  let treatment = useSelector((state) => state.treatment);

  if (viewMode && storedDiagnostic && storedTreatment) {
    diagnostic = storedDiagnostic;
    treatment = storedTreatment;
  }

  const setRecomendationHandler = (event) => {
    event.preventDefault();
    dispatch(treatmentActions.setRecomendation(event.target.value));
  };

  return (
    <Box>
      <h4>Tratamientos</h4>
      {diagnostic.data.map((localData) => (
        <TreatmentBlock
          key={localData.id}
          diagnostic={localData}
          data={treatment}
          viewMode={viewMode}
        />
      ))}
      <div style={{ height: "8px" }} />
      <h4>Recomendaciones</h4>
      <TextField
        id="recomendations"
        value={treatment.recomendation}
        onChange={setRecomendationHandler}
        multiline
        rows={4}
        fullWidth
        disabled={viewMode}
      />
      {!viewMode && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            paddingTop: 3
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate("/consultas")}
          >
            Guardar
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Treatment;
