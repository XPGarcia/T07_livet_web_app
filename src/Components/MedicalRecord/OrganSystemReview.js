import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { organSystemReviewActions } from "../../Store/MedicalRecord/organSystemReview";

function SystemButton({
  title,
  system,
  active,
  value,
  onSystemSelected,
  onDescriptionChange,
  viewMode
}) {
  const systemSelectedHandler = (selectedSystem) => {
    if (viewMode) return;
    onSystemSelected(selectedSystem);
  };
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
            systemSelectedHandler(system);
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
            disabled={viewMode}
          />
        )}
      </Grid>
    </Grid>
  );
}

function OrganSystemReview({ data, viewMode }) {
  const dispatch = useDispatch();
  let organSystemReview = useSelector((state) => state.organSystemReview);

  if (viewMode && data) {
    organSystemReview = data;
  }

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
        active={organSystemReview.neurologico?.active}
        value={organSystemReview.neurologico?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
      <SystemButton
        title="Cardiovascular"
        system="cardiovascular"
        active={organSystemReview.cardiovascular?.active}
        value={organSystemReview.cardiovascular?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
      <SystemButton
        title="Respiratorio"
        system="respiratorio"
        active={organSystemReview.respiratorio?.active}
        value={organSystemReview.respiratorio?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
      <SystemButton
        title="Digestivo"
        system="digestivo"
        active={organSystemReview.digestivo?.active}
        value={organSystemReview.digestivo?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
      <SystemButton
        title="Tegumentario"
        system="tegumentario"
        active={organSystemReview.tegumentario?.active}
        value={organSystemReview.tegumentario?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
      <SystemButton
        title="Renal"
        system="renal"
        active={organSystemReview.renal?.active}
        value={organSystemReview.renal?.description}
        onSystemSelected={selectSystemHandler}
        onDescriptionChange={setSystemDescriptionHandler}
        viewMode={viewMode}
      />
    </Box>
  );
}

export default OrganSystemReview;
