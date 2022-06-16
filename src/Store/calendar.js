import { createSlice } from "@reduxjs/toolkit";

const initialCalendarState = {
  appointments: [],
  loading: false,
  currentDate: new Date().toISOString(),
  currentViewName: "Day"
};

const ecTime = (date) => new Date(date).toLocaleString();

const mapAppointmentData = (appointment) => ({
  startDate: ecTime(appointment.startDate),
  endDate: ecTime(appointment.endDate),
  title: appointment.title
});

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialCalendarState,
  reducers: {
    setData(state, action) {
      state.data = action.payload.map(mapAppointmentData);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
    setCurrentViewName(state, action) {
      state.currentViewName = action.payload;
    }
  }
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
