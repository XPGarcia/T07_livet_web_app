import { createSlice } from "@reduxjs/toolkit";

const initialAppointmentState = {
  client: {
    id: "",
    name: ""
  },
  specialty: "",
  medicalCenter: "",
  doctor: {
    id: "",
    name: ""
  },
  date: new Date(Date.now()).toISOString(),
  schedule: {
    id: "",
    startDate: ""
  }
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setClient(state, action) {
      state.client.id = action.payload.clientId;
      state.client.name = action.payload.clientName;
    },
    setSpecialty(state, action) {
      state.specialty = action.payload;
    },
    setMedicalCenter(state, action) {
      state.medicalCenter = action.payload;
    },
    setDoctor(state, action) {
      state.doctor.id = action.payload.id;
      state.doctor.name = action.payload.name;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setSchedule(state, action) {
      state.schedule.id = action.payload.id;
      state.schedule.startDate = action.payload.startDate;
    },
    resetAppointment(state) {
      state.client = {
        id: "",
        name: ""
      };
      state.specialty = "";
      state.medicalCenter = "";
      state.doctor = {
        id: "",
        name: ""
      };
      state.schedule = "";
    }
  }
});

export const appointmentActions = appointmentSlice.actions;

export default appointmentSlice.reducer;
