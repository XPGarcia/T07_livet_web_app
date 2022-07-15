import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import TreatmentBlock from "./TreatmentBlock";

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
            Finalizar Consulta
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Treatment;
