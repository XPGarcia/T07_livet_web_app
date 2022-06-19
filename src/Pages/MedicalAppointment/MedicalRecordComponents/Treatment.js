import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import SingleList from "../../../Components/SingleList/SingleList";

function TreatmentBlock({ diagnostic }) {
  const dispatch = useDispatch();
  const treatment = useSelector((state) => state.treatment);
  const [addTreatment, setAddTreatment] = useState(false);
  const [newTreatment, setNewTreatment] = useState("");

  const addTreatmentHandler = (event) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    const temp = treatment.data[diagnostic.id]
      ? [...treatment.data[diagnostic.id]]
      : [];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      diagnosticId: diagnostic.id,
      name: event.target.value.trim()
    });
    dispatch(
      treatmentActions.setTreatment({
        diagnosticId: diagnostic.id,
        treatments: temp
      })
    );
    setNewTreatment("");
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
      <SingleList
        data={treatment.data[diagnostic.id] ?? []}
        dependencyId={diagnostic.id}
        onDelete={deleteTreatmentHandler}
      />
      <div style={{ height: "16px" }} />
      {addTreatment && (
        <div style={{ marginBottom: "16px" }}>
          <TextField
            id="treatmentInput"
            label="Nuevo Tratamiento"
            fullWidth
            value={newTreatment}
            onChange={(event) => setNewTreatment(event.target.value)}
            onKeyDown={addTreatmentHandler}
          />
        </div>
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
    dispatch(treatmentActions.setRecomendation(event.target.value.trim()));
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
