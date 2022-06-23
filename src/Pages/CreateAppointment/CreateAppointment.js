import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import PatientGeneralData from "../../Components/PatientGeneralData/PatientGeneralData";
import SidebarLayout from "../../Layouts/SidebarLayout";
import getPatient from "../../Services/patientService";
import { formatDate, formatTime } from "../../Utils/Dates";
import { getSpecialtyName } from "../../Utils/Specialties";
import { appointmentActions } from "../../Store/appointment";

function CreateAppointment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);

  const [searchSSN, setSearchSSN] = useState();
  const [patient, setPatient] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const searchPatient = () => {
    const searchedPatient = getPatient(searchSSN);
    setPatient(searchedPatient ?? {});
    if (searchedPatient.id) {
      dispatch(
        appointmentActions.setClient({
          id: searchedPatient.id,
          name: searchedPatient.name
        })
      );
    }
  };

  const openDialogHandler = () => setOpenDialog(true);

  const closeDialogHandler = () => setOpenDialog(false);

  const createAppointmentHandler = () => {
    navigate("/citas");
  };

  return (
    <SidebarLayout>
      <h4>Escoger Paciente</h4>
      <TextField
        id="ssnPatient"
        label="Buscar por cédula"
        value={searchSSN}
        onChange={(event) => setSearchSSN(event.target.value)}
        autoComplete="off"
        InputProps={{
          endAdornment: (
            <Button variant="contained" color="primary" onClick={searchPatient}>
              Buscar
            </Button>
          )
        }}
      />
      {patient.id && (
        <PatientGeneralData patient={patient} style={{ marginTop: "24px" }} />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 1,
          paddingTop: 3
        }}
      >
        <ButtonGroup variant="outlined" aria-label="button group">
          <Button
            color="neutral"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            Regresar
          </Button>
          <Button
            color="primary"
            variant="outlined"
            endIcon={<ArrowForwardIosIcon />}
            disabled={!patient.id}
            onClick={openDialogHandler}
          >
            Confirmar
          </Button>
        </ButtonGroup>
      </Box>
      <Dialog
        open={openDialog}
        onClose={closeDialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ¿Está seguro que desea confirmar la cita?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`La cita será generada para el día ${formatDate(
              appointment.date
            )} a las ${formatTime(
              appointment.schedule.startDate
            )} con el doctor/a ${
              appointment.doctor.name
            } en la especialidad de ${getSpecialtyName(
              appointment.specialty
            )}.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogHandler} color="error">
            Cancelar
          </Button>
          <Button
            variant="outlined"
            onClick={createAppointmentHandler}
            autoFocus
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </SidebarLayout>
  );
}

export default CreateAppointment;
