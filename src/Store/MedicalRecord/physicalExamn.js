import { createSlice } from "@reduxjs/toolkit";

const initialPhysicalExam = {
  cabeza: {
    active: false,
    description: ""
  },
  cuello: {
    active: false,
    description: ""
  },
  torax: {
    active: false,
    description: ""
  },
  abdomen: {
    active: false,
    description: ""
  },
  pelvis: {
    active: false,
    description: ""
  },
  extremidades: {
    active: false,
    description: ""
  }
};

const physicalExamSLice = createSlice({
  name: "physicalExam",
  initialState: initialPhysicalExam,
  reducers: {
    setRegionActive(state, action) {
      if (!state[action.payload.region].active)
        state[action.payload.region].description = "";
      state[action.payload.region].active = action.payload.active;
    },
    setRegionDescription(state, action) {
      state[action.payload.region].description = action.payload.description;
    }
  }
});

export const physicalExamActions = physicalExamSLice.actions;

export default physicalExamSLice.reducer;
