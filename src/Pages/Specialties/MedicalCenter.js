import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import { Alert, Button, ButtonGroup, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SidebarLayout from "../../Layouts/SidebarLayout";
import Specialties from "../../Utils/Specialties";
import getDoctorList from "../../Services/doctorService";
import DoctorCard from "../../Components/DoctorCard/DoctorCard";
import { appointmentActions } from "../../Store/appointment";
import CustomDatePicker from "../../UI/CustomDatePicker/CustomDatePicker";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function MedicalCenter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const appointment = useSelector((state) => state.appointment);

  const specialty = Specialties[query.get("specialty")];

  const [doctorList, setDoctorList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const setMedicalCenterHandler = (event) => {
    dispatch(appointmentActions.setDoctor({ id: "", name: "" }));
    dispatch(appointmentActions.setSchedule(""));
    setIsComplete(false);
    dispatch(appointmentActions.setMedicalCenter(event.target.value));
  };

  const setDoctorListHandler = (event) => {
    setDoctorList(getDoctorList(specialty.code, event.target.dataset.value));
  };

  const setScheduleHandler = (doctor, scheduleId) => {
    dispatch(
      appointmentActions.setDoctor({ id: doctor.id, name: doctor.name })
    );
    dispatch(appointmentActions.setSchedule(scheduleId));
    setIsComplete(true);
  };

  const setDateHandler = (newValue) => {
    dispatch(appointmentActions.setDate(newValue.toISOString()));
  };

  return (
    <SidebarLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <h2>{specialty.name}</h2>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <FormControl
            sx={{ minWidth: { xs: 150, md: 170 }, mr: { xs: 1, md: 3 } }}
          >
            <InputLabel id="medicalCenterLabel">Establecimiento</InputLabel>
            <Select
              labelId="medicalCenterLabel"
              id="medicalCenter"
              value={appointment.medicalCenter}
              label="Establecimiento"
              onChange={setMedicalCenterHandler}
            >
              <MenuItem onClick={setDoctorListHandler} value="sauces">
                Sauces
              </MenuItem>
              <MenuItem onClick={setDoctorListHandler} value="duran">
                Durán
              </MenuItem>
            </Select>
          </FormControl>
          <CustomDatePicker
            value={new Date(appointment.date)}
            onChange={setDateHandler}
            disablePast
          />
        </Box>
        {doctorList.length === 0 && (
          <Alert sx={{ margin: 1 }} severity="warning">
            No se disponen de citas para la fecha seleccionada
          </Alert>
        )}
        <Grid container>
          {doctorList.map((doctor) => (
            <Grid item p={1} xs={12} md={6} lg={4}>
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                medicalCenter={appointment.medicalCenter}
                onScheduleClicked={setScheduleHandler}
              />
            </Grid>
          ))}
        </Grid>
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
              variant={isComplete ? "contained" : "outlined"}
              endIcon={<ArrowForwardIosIcon />}
              disabled={!isComplete}
            >
              Continuar
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </SidebarLayout>
  );
}

export default MedicalCenter;
