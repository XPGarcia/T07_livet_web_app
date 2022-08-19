import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, ButtonGroup } from "@mui/material";

function BottomBlockButtons({ canGoBack, nextDisabled, nextOnClick }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: 1,
        paddingTop: 3
      }}
    >
      <ButtonGroup variant="outlined" aria-label="button group">
        {canGoBack && (
          <Button
            color="neutral"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            Regresar
          </Button>
        )}
        <Button
          color="primary"
          variant={!nextDisabled ? "contained" : "outlined"}
          endIcon={<ArrowForwardIosIcon />}
          disabled={nextDisabled}
          onClick={nextOnClick}
        >
          Confirmar
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default BottomBlockButtons;
