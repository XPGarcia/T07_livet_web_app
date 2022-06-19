import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { physicalExamActions } from "../../../Store/MedicalRecord/physicalExamn";

function RegionButton({
  title,
  region,
  active,
  value,
  onRegionSelected,
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
            onRegionSelected(region);
          }}
        >
          {title}
        </Button>
      </Grid>
      <Grid item xs={12}>
        {active && (
          <TextField
            id={region}
            label="Detalles"
            value={value}
            onChange={(event) =>
              onDescriptionChange(region, event.target.value)
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

function PhysicalExam() {
  const dispatch = useDispatch();
  const physicalExam = useSelector((state) => state.physicalExam);

  const selectRegionHandler = (region) => {
    dispatch(
      physicalExamActions.setRegionActive({
        region,
        active: !physicalExam[region].active
      })
    );
  };

  const setRegionDescriptionHandler = (region, description) => {
    dispatch(
      physicalExamActions.setRegionDescription({
        region,
        description
      })
    );
  };

  return (
    <Box>
      <h4>Escoger Regiones</h4>
      <RegionButton
        title="Cabeza"
        region="cabeza"
        active={physicalExam.cabeza.active}
        value={physicalExam.cabeza.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
      <RegionButton
        title="Cuello"
        region="cuello"
        active={physicalExam.cuello.active}
        value={physicalExam.cuello.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
      <RegionButton
        title="Tórax"
        region="torax"
        active={physicalExam.torax.active}
        value={physicalExam.torax.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
      <RegionButton
        title="Abdomen"
        region="abdomen"
        active={physicalExam.abdomen.active}
        value={physicalExam.abdomen.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
      <RegionButton
        title="Pelvis"
        region="pelvis"
        active={physicalExam.pelvis.active}
        value={physicalExam.pelvis.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
      <RegionButton
        title="Extremidades"
        region="extremidades"
        active={physicalExam.extremidades.active}
        value={physicalExam.extremidades.description}
        onRegionSelected={selectRegionHandler}
        onDescriptionChange={setRegionDescriptionHandler}
      />
    </Box>
  );
}

export default PhysicalExam;
