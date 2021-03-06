import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  ViewSwitcher,
  DateNavigator,
  TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomToolbar from "./CustomToolbar";
import CustomAppointmentTooltip from "./CustomAppointmentTooltip";
import { calendarActions } from "../../Store/calendar";
import Appointment from "./Appointment";
import AppointmentComponent from "./AppointmentComponent";

const [startHour, endHour] = [8, 21];

const schedulerData = [
  {
    id: 1,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-23T09:30",
    endDate: "2022-06-23T10:00",
    title: "Cardiología",
    code: "cardiology"
  },
  {
    id: 2,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-23T09:30",
    endDate: "2022-06-23T10:00",
    title: "Pediatría",
    code: "pediatrics"
  },
  {
    id: 3,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-24T12:00",
    endDate: "2022-06-24T12:30",
    title: "Medicina General",
    code: "general_medicine"
  },
  {
    id: 4,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-25T14:30",
    endDate: "2022-06-25T15:00",
    title: "Pediatría",
    code: "pediatrics"
  }
];

const data = schedulerData.map((appointment) => ({
  ...appointment,
  title: `${appointment.title} - ${appointment.doctor}`
}));

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          height: "65px !important",
          "& > div.Label-label": {
            height: "65px !important",
            lineHeight: "65px !important"
          },
          "& > div.Label-emptyLabel": {
            height: "32px !important"
          }
        }
      }
    }
  }
});

function Calendar() {
  const dispatch = useDispatch();
  const calendar = useSelector((state) => state.calendar);

  // const setData = (data) => dispatch(calendarActions.setData(data));

  // const setLoading = (loading) => dispatch(calendarActions.setLoading(loading));

  const setCurrentDate = (currentDate) =>
    dispatch(calendarActions.setCurrentDate(currentDate.toISOString()));

  const setCurrentViewName = (currentViewName) =>
    dispatch(calendarActions.setCurrentViewName(currentViewName));

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={data} locale="es-EC">
          <ViewState
            currentDate={calendar.currentDate}
            currentViewName={calendar.currentViewName}
            onCurrentViewNameChange={setCurrentViewName}
            onCurrentDateChange={setCurrentDate}
          />
          <WeekView
            displayName="Semanal"
            startDayHour={startHour}
            endDayHour={endHour}
          />
          <DayView
            displayName="Diario"
            startDayHour={startHour}
            endDayHour={endHour}
          />
          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentComponent}
          />
          <CustomToolbar />
          <DateNavigator />
          <TodayButton messages={{ today: "Hoy" }} />
          <ViewSwitcher />
          <CustomAppointmentTooltip />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
}

export default Calendar;
