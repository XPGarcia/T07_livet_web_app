import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PhysicalExam() {
  const [selected, setSelected] = useState(false);

  const selectHeadHandler = (event) => {
    event.preventDefault();
    setSelected(!selected);
  };

  return (
    <Box>
      <h4>Escoger Regiones:</h4>
      <Button
        variant={selected ? "contained" : "outlined"}
        color={selected ? "primary" : "neutral"}
        startIcon={selected ? <CheckIcon /> : <MoreHorizIcon />}
        onClick={selectHeadHandler}
      >
        Cabeza
      </Button>
    </Box>
  );
}

export default PhysicalExam;
