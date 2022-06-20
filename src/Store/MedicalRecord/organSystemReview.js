import { createSlice } from "@reduxjs/toolkit";

const initialOrganSystemReview = {
  neurologico: {
    active: false,
    description: ""
  },
  cardiovascular: {
    active: false,
    description: ""
  },
  respiratorio: {
    active: false,
    description: ""
  },
  digestivo: {
    active: false,
    description: ""
  },
  tegumentario: {
    active: false,
    description: ""
  },
  renal: {
    active: false,
    description: ""
  }
};

const organSystemReviewSLice = createSlice({
  name: "organSystemReview",
  initialState: initialOrganSystemReview,
  reducers: {
    setSystemActive(state, action) {
      if (!state[action.payload.system].active)
        state[action.payload.system].description = "";
      state[action.payload.system].active = action.payload.active;
    },
    setSystemDescription(state, action) {
      state[action.payload.system].description = action.payload.description;
    }
  }
});

export const organSystemReviewActions = organSystemReviewSLice.actions;

export default organSystemReviewSLice.reducer;
