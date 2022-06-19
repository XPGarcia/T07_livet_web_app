import { createSlice } from "@reduxjs/toolkit";

const initialTreatment = {
  data: {},
  recomendation: ""
};

const treatmentSLice = createSlice({
  name: "treatment",
  initialState: initialTreatment,
  reducers: {
    setTreatment(state, action) {
      state.data[action.payload.diagnosticId] = action.payload.treatments;
    },
    setRecomendation(state, action) {
      state.recomendation = action.payload;
    }
  }
});

export const treatmentActions = treatmentSLice.actions;

export default treatmentSLice.reducer;
