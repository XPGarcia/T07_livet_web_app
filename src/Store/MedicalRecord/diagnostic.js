import { createSlice } from "@reduxjs/toolkit";

const initialDiagnostic = {
  data: [],
  adding: false,
  newDiagnostic: ""
};

const diagnosticSLice = createSlice({
  name: "diagnostic",
  initialState: initialDiagnostic,
  reducers: {
    setDiagnostics(state, action) {
      state.data = action.payload;
    },
    setAdding(state) {
      state.adding = !state.adding;
    },
    setNewDiagnostic(state, action) {
      state.newDiagnostic = action.payload;
    }
  }
});

export const diagnosticActions = diagnosticSLice.actions;

export default diagnosticSLice.reducer;
