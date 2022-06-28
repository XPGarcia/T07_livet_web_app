import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField } from "@mui/material";
import { currentProblemActions } from "../../../Store/MedicalRecord/currentProblem";

function CurrentProblem({ data, viewMode }) {
  const dispatch = useDispatch();
  let currentProblem = useSelector((state) => state.currentProblem);

  if (viewMode && data) {
    currentProblem = data;
  }

  const setCurrentProblem = (event) => {
    const localData = event.target.value.trim();
    dispatch(currentProblemActions.setCurrentProblem(localData));
  };

  return (
    <Box>
      <h4>Problema actual</h4>
      <TextField
        id="currentProblem"
        label="Descripción completa del Problema"
        value={currentProblem.currentProblem}
        onChange={setCurrentProblem}
        multiline
        rows={18}
        fullWidth
        disabled={viewMode}
      />
    </Box>
  );
}

export default CurrentProblem;
