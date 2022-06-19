import { createSlice } from "@reduxjs/toolkit";

const initialPreparation = {
  bloodPressure: "",
  heartRate: "",
  breathingFrequency: "",
  temperature: "",
  oxygenSaturation: "",
  height: "",
  weight: ""
};

const preparationSlice = createSlice({
  name: "preparation",
  initialState: initialPreparation,
  reducers: {
    setBloodPressure(state, action) {
      state.bloodPressure = action.payload;
    },
    setHeartRate(state, action) {
      state.heartRate = action.payload;
    },
    setBreathingFrequency(state, action) {
      state.breathingFrequency = action.payload;
    },
    setTemperature(state, action) {
      state.temperature = action.payload;
    },
    setOxygenSaturation(state, action) {
      state.oxygenSaturation = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
    setWeight(state, action) {
      state.weight = action.payload;
    }
  }
});

export const preparationActions = preparationSlice.actions;

export default preparationSlice.reducer;
