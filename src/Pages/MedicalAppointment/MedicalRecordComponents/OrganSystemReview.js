import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { organSystemReviewActions } from "../../../Store/MedicalRecord/organSystemReview";

function SystemButton({
  title,
  system,
  active,
  value,
  onSystemSelected,
  onDescriptionChange
}) {
  return (
    <Grid container mb={3}>
      <Grid item xs={12} mb={2}>
        <Button
          variant={active ? "contained" : "outlined"}
          color={active ? "primary" : "neutral"}
          startIcon={active ? <CheckIcon /> : <MoreHorizIcon />}
          sx={{ width: "200px" }}
          onClick={(event) => {
            event.preventDefault();
            onSystemSelected(system);
          }}
        >
          {title}
        </Button>
      </Grid>
      <Grid item xs={12}>
        {active && (
          <TextField
            id={system}
            label="Detalles"
            value={value}
            onChange={(event) =>
              onDescriptionChange(system, event.target.value)
            }
            multiline
            rows={2}
            fullWidth
          />
        )}
      </Grid>
    </Grid>
  );
}

function OrganSystemReview() {
  const dispatch = useDispatch();
  const organSystemReview = useSelector((state) => state.organSystemReview);

  const selectSystemHandler = (system) => {
    dispatch(
      organSystemReviewActions.setSystemActive({
        system,
        active: !organSystemReview[system].active
      })
    );
  };

  const setSystemDescriptionHandler = (system, description) => {
    dispatch(
      organSystemReviewActions.setSystemDescription({
        system,
        description
      })
    );
  };

  return (
    <Box>
      <h4>Escoger Sistemas</h4>
      <SystemButton
        title="Neurológico"
        system="neurologico"
        active={organSystemReview.neurologico.active}
        value={organSystemReview.neurologico.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
      />
      <SystemButton
        title="Cardiovascular"
        system="cardiovascular"
        active={organSystemReview.cardiovascular.active}
        value={organSystemReview.cardiovascular.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
      />
      <SystemButton
        title="Respiratorio"
        system="respiratorio"
        active={organSystemReview.respiratorio.active}
        value={organSystemReview.respiratorio.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
      />
      <SystemButton
        title="Tegumentario"
        system="tegumentario"
        active={organSystemReview.tegumentario.active}
        value={organSystemReview.tegumentario.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
      />
      <SystemButton
        title="Renal"
        system="renal"
        active={organSystemReview.renal.active}
        value={organSystemReview.renal.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
      />
    </Box>
  );
}

export default OrganSystemReview;
