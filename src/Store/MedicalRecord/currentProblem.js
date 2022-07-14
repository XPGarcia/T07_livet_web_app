import { createSlice } from "@reduxjs/toolkit";

const initialCurrentProblem = {
  currentProblem: ""
};

const currentProblemSLice = createSlice({
  name: "currentProblem",
  initialState: initialCurrentProblem,
  reducers: {
    setCurrentProblem(state, action) {
      state.currentProblem = action.payload;
    },
    reset() {
      return initialCurrentProblem;
    }
  }
});

export const currentProblemActions = currentProblemSLice.actions;

export default currentProblemSLice.reducer;
