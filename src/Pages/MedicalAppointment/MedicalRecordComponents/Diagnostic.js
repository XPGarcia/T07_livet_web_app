import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Divider, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { diagnosticActions } from "../../../Store/MedicalRecord/diagnostic";

function Diagnostic() {
  const dispatch = useDispatch();
  const diagnostic = useSelector((state) => state.diagnostic);

  const setNewDiagnosticHandler = (text) => {
    dispatch(diagnosticActions.setNewDiagnostic(text));
  };

  const setAddingHandler = (adding) => {
    dispatch(diagnosticActions.setAdding(adding));
  };

  const addDiagnosticHandler = (event) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    const temp = [...diagnostic.data];
    temp.push(event.target.value.trim());
    dispatch(diagnosticActions.setDiagnostics(temp));
    setNewDiagnosticHandler("");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h4>Diagnóstico</h4>
        {!diagnostic.adding && (
          <Button
            variant="outlined"
            size="small"
            sx={{ height: "fit-content" }}
            startIcon={<AddIcon />}
            onClick={() => setAddingHandler(true)}
          >
            Diagnóstico nuevo
          </Button>
        )}
        {diagnostic.adding && (
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ height: "fit-content" }}
            startIcon={<CloseIcon />}
            onClick={() => setAddingHandler(false)}
          >
            Detener
          </Button>
        )}
      </Box>
      <Divider />
      <ul>
        {diagnostic.data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {diagnostic.adding && (
        <TextField
          id="diagnosticInput"
          label="Nuevo Tratamiento"
          size="small"
          fullWidth
          value={diagnostic.newDiagnostic}
          onChange={(event) => setNewDiagnosticHandler(event.target.value)}
          onKeyDown={addDiagnosticHandler}
        />
      )}
    </Box>
  );
}

export default Diagnostic;
