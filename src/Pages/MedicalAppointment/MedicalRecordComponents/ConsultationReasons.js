import { Box, Grid, TextField } from "@mui/material";
import React from "react";

function ConsultationReasons() {
  return (
    <Box>
      <h4>Motivos de Consulta</h4>
      <Grid container>
        <Grid item p={1} xs={12}>
          <TextField id="reasonsAbstract" label="Resumen" fullWidth />
        </Grid>
        <Grid item p={1} xs={12}>
          <TextField
            id="reasonsDescription"
            label="Descripción detallada"
            multiline
            rows={6}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ConsultationReasons;
