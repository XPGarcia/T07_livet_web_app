import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TreatmentList({ data, onDelete, viewMode }) {
  if (!data || data.length === 0) return <div />;
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="treatment table">
        <TableHead>
          <TableRow>
            <TableCell>Medicamento</TableCell>
            <TableCell align="right">Presentación/Concentración</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Indicaciones</TableCell>
            {!viewMode && <TableCell align="right">...</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.treatmentFields.medicine}
              </TableCell>
              <TableCell align="right">
                {row.treatmentFields.presentation}
              </TableCell>
              <TableCell align="right">
                {row.treatmentFields.quantity}
              </TableCell>
              <TableCell align="right">
                {row.treatmentFields.indications}
              </TableCell>
              {!viewMode && (
                <TableCell align="right">
                  <IconButton
                    color="error"
                    onClick={(event) => onDelete(event, row)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TreatmentList;
