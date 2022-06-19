import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField } from "@mui/material";
import { currentProblemActions } from "../../../Store/MedicalRecord/currentProblem";

function CurrentProblem() {
  const dispatch = useDispatch();
  const currentProblem = useSelector((state) => state.currentProblem);

  const setCurrentProblem = (event) => {
    const data = event.target.value.trim();
    dispatch(currentProblemActions.setCurrentProblem(data));
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
      />
    </Box>
  );
}

export default CurrentProblem;
