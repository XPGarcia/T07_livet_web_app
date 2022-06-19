import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Divider, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { backgroundDataActions } from "../../../Store/MedicalRecord/backgroundData";

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
    temp.push(event.target.value);
    dispatch(backgroundDataActions.setPersonalBackgrounds(temp));
    setNewPersonalBackground("");
  };

  const addFamilyBackgroundHandler = (event) => {
    if (event.key !== "Enter" || event.target.value.trim() === "") return;
    const temp = [...backgroundData.familyBackgrounds];
    temp.push(event.target.value);
    dispatch(backgroundDataActions.setFamilyBackgrounds(temp));
    setNewFamilyBackground("");
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
      <ul>
        {backgroundData.personalBackgrounds.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {addPersonalBackground && (
        <TextField
          id="personalBackgroundInput"
          label="Nuevo Antecendente Personal"
          size="small"
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
      <ul>
        {backgroundData.familyBackgrounds.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {addFamilyBackground && (
        <TextField
          id="familyBackgroundInput"
          label="Nuevo Antecendente Familiar"
          size="small"
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
