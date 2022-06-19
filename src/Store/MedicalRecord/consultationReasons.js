import { createSlice } from "@reduxjs/toolkit";

const initialConsultationReasons = {
  reasonsAbstract: "",
  reasonsDescription: ""
};

const consultationReasonsSLice = createSlice({
  name: "consultationReasons",
  initialState: initialConsultationReasons,
  reducers: {
    setReasonsAbstract(state, action) {
      state.reasonsAbstract = action.payload;
    },
    setReasonsDescription(state, action) {
      state.reasonsDescription = action.payload;
    }
  }
});

export const consultationReasonsActions = consultationReasonsSLice.actions;

export default consultationReasonsSLice.reducer;
