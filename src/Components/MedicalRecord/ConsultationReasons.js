import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, TextField } from "@mui/material";
import { consultationReasonsActions } from "../../Store/MedicalRecord/consultationReasons";

function ConsultationReasons({ data, viewMode }) {
  const dispatch = useDispatch();
  let consultationReasons = useSelector((state) => state.consultationReasons);

  if (viewMode && data) {
    consultationReasons = data;
  }

  const setReasonsAbstract = (reasonsAbstract) =>
    dispatch(consultationReasonsActions.setReasonsAbstract(reasonsAbstract));

  const setReasonsDescription = (reasonsDescription) =>
    dispatch(
      consultationReasonsActions.setReasonsDescription(reasonsDescription)
    );

  return (
    <Box>
      <h4>Motivos de Consulta</h4>
      <Grid container>
        <Grid item p={1} xs={12}>
          <TextField
            id="reasonsAbstract"
            label="Resumen"
            value={consultationReasons.reasonsAbstract}
            onChange={(event) => setReasonsAbstract(event.target.value)}
            fullWidth
            disabled={viewMode}
          />
        </Grid>
        <Grid item p={1} xs={12}>
          <TextField
            id="reasonsDescription"
            label="Descripción detallada"
            value={consultationReasons.reasonsDescription}
            onChange={(event) => setReasonsDescription(event.target.value)}
            multiline
            rows={6}
            fullWidth
            disabled={viewMode}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ConsultationReasons;
