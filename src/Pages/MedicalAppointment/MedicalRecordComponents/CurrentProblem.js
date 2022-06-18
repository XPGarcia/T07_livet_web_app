import { Box, TextField } from "@mui/material";
import React from "react";

function CurrentProblem() {
  return (
    <Box>
      <h4>Problema actual</h4>
      <TextField
        id="currentProblem"
        label="Descripción completa del Problema"
        multiline
        rows={18}
        fullWidth
      />
    </Box>
  );
}

export default CurrentProblem;
