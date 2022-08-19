import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PatientGeneralData from "../../Components/PatientGeneralData/PatientGeneralData";
import SidebarLayout from "../../Layouts/SidebarLayout";
import getPatient from "../../Services/patientService";
import { formatDate, formatTime } from "../../Utils/Dates";
import { getSpecialtyName, pickSpecialtyColor } from "../../Utils/Specialties";
import { appointmentActions } from "../../Store/appointment";
import Validator from "../../Utils/Validators";
import CustomDialog from "../../UI/CustomDialog/CustomDialog";
import BottomBlockButtons from "../../Components/BottomBlockButtons/BottomBlockButtons";

function ChoosePatient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);

  const [searchSSN, setSearchSSN] = useState("");
  const [errorSearchSSN, setErrorSearchSSN] = useState({
    hasError: false,
    message: ""
  });

  const [patient, setPatient] = useState({});

  const [patientNotFound, setPatientNotFound] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const createAppointmentHandler = () => {
    navigate("/citas");
  };

  const isValid = () => {
    const errorData = Validator(searchSSN, ["required", "length"], {
      length: 10
    });
    setErrorSearchSSN(errorData);
    return !errorData.hasError;
  };

  const searchPatient = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    const searchedPatient = getPatient(searchSSN);
    setPatient(searchedPatient ?? {});
    if (searchedPatient && searchedPatient.id) {
      dispatch(
        appointmentActions.setClient({
          id: searchedPatient.id,
          name: searchedPatient.name
        })
      );
      setPatientNotFound(false);
    } else {
      setPatientNotFound(true);
    }
  };

  const dialogContent = (
    <span>
      La cita será generada para el día <b>{formatDate(appointment.date)}</b> a
      las <b>{formatTime(appointment.schedule.startDate)}</b> con el doctor/a{" "}
      <b>{appointment.doctor.name}</b> en la especialidad de{" "}
      <span style={{ color: pickSpecialtyColor(appointment.specialty) }}>
        <b>{getSpecialtyName(appointment.specialty)}</b>
      </span>
      .
    </span>
  );

  return (
    <SidebarLayout>
      <h4>Escoger Paciente</h4>
      <form onSubmit={searchPatient}>
        <TextField
          id="ssnPatient"
          label="Buscar por cédula"
          value={searchSSN}
          onChange={(event) => setSearchSSN(event.target.value)}
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <Button type="submit" variant="contained" color="primary">
                Buscar
              </Button>
            )
          }}
          error={errorSearchSSN.hasError}
          helperText={errorSearchSSN.message}
        />
      </form>
      {patientNotFound && (
        <Alert sx={{ marginTop: 3 }} severity="warning">
          No se ha encontrado un paciente con esta información
        </Alert>
      )}
      {patient.id && (
        <PatientGeneralData patient={patient} style={{ marginTop: "24px" }} />
      )}
      <BottomBlockButtons
        canGoBack
        nextDisabled={!patient.id}
        nextOnClick={() => setOpenDialog(true)}
      />
      <CustomDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title="¿Está seguro que desea confirmar la cita?"
        content={dialogContent}
        onSubmit={createAppointmentHandler}
      />
    </SidebarLayout>
  );
}

export default ChoosePatient;
