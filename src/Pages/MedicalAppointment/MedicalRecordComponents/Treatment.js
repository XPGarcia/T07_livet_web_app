import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import TreatmentList from "../../../Components/TreatmentList/TreatmentList";

function TreatmentBlock({ diagnostic }) {
  const dispatch = useDispatch();
  const treatment = useSelector((state) => state.treatment);

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
      (data) => data.id !== payload.id
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
        {!addTreatment && (
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
        {addTreatment && (
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
        data={treatment.data[diagnostic.id] ?? []}
        onDelete={deleteTreatmentHandler}
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

function Treatment() {
  const dispatch = useDispatch();
  const diagnostic = useSelector((state) => state.diagnostic);
  const treatment = useSelector((state) => state.treatment);

  const setRecomendationHandler = (event) => {
    event.preventDefault();
    dispatch(treatmentActions.setRecomendation(event.target.value));
  };

  return (
    <Box>
      <h4>Tratamientos</h4>
      {diagnostic.data.map((data) => (
        <TreatmentBlock key={data.id} diagnostic={data} />
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
      />
    </Box>
  );
}

export default Treatment;
