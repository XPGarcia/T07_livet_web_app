import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Divider, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { diagnosticActions } from "../../Store/MedicalRecord/diagnostic";
import SingleList from "../SingleList/SingleList";

function Diagnostic({ data, viewMode }) {
  const dispatch = useDispatch();
  let diagnostic = useSelector((state) => state.diagnostic);

  if (viewMode && data) {
    diagnostic = data;
  }

  const setNewDiagnosticHandler = (text) => {
    dispatch(diagnosticActions.setNewDiagnostic(text));
  };

  const setAddingHandler = (adding) => {
    dispatch(diagnosticActions.setAdding(adding));
  };

  const addWithEnterKey = (event, addingFunction) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    addingFunction();
  };

  const addWithButton = (event, addingFunction) => {
    event.preventDefault();
    addingFunction();
  };

  const addDiagnosticHandler = () => {
    const temp = [...diagnostic.data];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      name: diagnostic.newDiagnostic.trim()
    });
    dispatch(diagnosticActions.setDiagnostics(temp));
    setNewDiagnosticHandler("");
  };

  const deleteDiagnosticHandler = (event, payload) => {
    event.preventDefault();
    const temp = diagnostic.data.filter(
      (localData) => localData.id !== payload.id
    );
    dispatch(diagnosticActions.setDiagnostics(temp));
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
        {!viewMode && !diagnostic.adding && (
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
        {!viewMode && diagnostic.adding && (
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
      <SingleList
        data={diagnostic.data}
        onDelete={deleteDiagnosticHandler}
        viewMode={viewMode}
      />
      <div style={{ height: "16px" }} />
      {diagnostic.adding && (
        <TextField
          id="diagnosticInput"
          label="Nuevo Diagnóstico"
          fullWidth
          value={diagnostic.newDiagnostic}
          onChange={(event) => setNewDiagnosticHandler(event.target.value)}
          onKeyDown={(event) => addWithEnterKey(event, addDiagnosticHandler)}
          InputProps={{
            endAdornment: (
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={(event) => addWithButton(event, addDiagnosticHandler)}
              >
                Añadir
              </Button>
            )
          }}
        />
      )}
    </Box>
  );
}

export default Diagnostic;
