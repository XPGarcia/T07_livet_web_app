import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TreatmentList from "./TreatmentList";
import TreatmentForm from "./TreatmentForm";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";

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

export default TreatmentBlock;
