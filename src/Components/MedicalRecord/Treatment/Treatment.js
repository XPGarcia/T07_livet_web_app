import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import TreatmentList from "./TreatmentList";
import TreatmentForm from "./TreatmentForm";

function TreatmentBlock({ diagnostic, data, viewMode }) {
  const dispatch = useDispatch();
  let treatment = useSelector((state) => state.treatment);

  const [addTreatment, setAddTreatment] = useState(false);

  if (viewMode && data) {
    treatment = data;
  }

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
        <TreatmentForm
          diagnostic={diagnostic}
          data={data}
          viewMode={viewMode}
        />
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
