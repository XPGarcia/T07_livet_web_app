import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Divider, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { backgroundDataActions } from "../../../Store/MedicalRecord/backgroundData";
import SingleList from "../../../Components/SingleList/SingleList";

function BackgrounData() {
  const dispatch = useDispatch();
  const backgroundData = useSelector((state) => state.backgroundData);

  const [addPersonalBackground, setAddPersonalBackground] = useState(false);
  const [addFamilyBackground, setAddFamilyBackground] = useState(false);

  const [newPersonalBackground, setNewPersonalBackground] = useState("");
  const [newFamilyBackground, setNewFamilyBackground] = useState("");

  const addPersonalBackgroundHandler = (event) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    const temp = [...backgroundData.personalBackgrounds];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      name: event.target.value.trim()
    });
    dispatch(backgroundDataActions.setPersonalBackgrounds(temp));
    setNewPersonalBackground("");
  };

  const deletePersonalBackgroundHandler = (event, payload) => {
    event.preventDefault();
    const temp = backgroundData.personalBackgrounds.filter(
      (data) => data.id !== payload.id
    );
    dispatch(backgroundDataActions.setPersonalBackgrounds(temp));
  };

  const addFamilyBackgroundHandler = (event) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    const temp = [...backgroundData.familyBackgrounds];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      name: event.target.value.trim()
    });
    dispatch(backgroundDataActions.setFamilyBackgrounds(temp));
    setNewFamilyBackground("");
  };

  const deleteFamilyBackgroundHandler = (event, payload) => {
    event.preventDefault();
    const temp = backgroundData.familyBackgrounds.filter(
      (data) => data.id !== payload.id
    );
    dispatch(backgroundDataActions.setFamilyBackgrounds(temp));
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
        <h4>Antecedentes Personales</h4>
        {!addPersonalBackground && (
          <Button
            variant="outlined"
            size="small"
            sx={{ height: "fit-content" }}
            startIcon={<AddIcon />}
            onClick={() => setAddPersonalBackground(true)}
          >
            Añadir nuevo
          </Button>
        )}
        {addPersonalBackground && (
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ height: "fit-content" }}
            startIcon={<CloseIcon />}
            onClick={() => setAddPersonalBackground(false)}
          >
            Detener
          </Button>
        )}
      </Box>
      <Divider />
      <SingleList
        data={backgroundData.personalBackgrounds}
        onDelete={deletePersonalBackgroundHandler}
      />
      <div style={{ height: "16px" }} />
      {addPersonalBackground && (
        <TextField
          id="personalBackgroundInput"
          label="Nuevo Antecendente Personal"
          fullWidth
          value={newPersonalBackground}
          onChange={(event) => setNewPersonalBackground(event.target.value)}
          onKeyDown={addPersonalBackgroundHandler}
        />
      )}

      <div style={{ height: "15px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h4>Antecedentes Familiares</h4>
        {!addFamilyBackground && (
          <Button
            variant="outlined"
            size="small"
            sx={{ height: "fit-content" }}
            startIcon={<AddIcon />}
            onClick={() => setAddFamilyBackground(true)}
          >
            Añadir nuevo
          </Button>
        )}
        {addFamilyBackground && (
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ height: "fit-content" }}
            startIcon={<CloseIcon />}
            onClick={() => setAddFamilyBackground(false)}
          >
            Detener
          </Button>
        )}
      </Box>
      <Divider />
      <SingleList
        data={backgroundData.familyBackgrounds}
        onDelete={deleteFamilyBackgroundHandler}
      />
      <div style={{ height: "16px" }} />
      {addFamilyBackground && (
        <TextField
          id="familyBackgroundInput"
          label="Nuevo Antecendente Familiar"
          fullWidth
          value={newFamilyBackground}
          onChange={(event) => setNewFamilyBackground(event.target.value)}
          onKeyDown={addFamilyBackgroundHandler}
        />
      )}
    </Box>
  );
}

export default BackgrounData;
